# Testing via SauceLabs

This will run your local test via SauceLabs browsers/devices.
You will need to have a SauceLabs account.

Using:
-   Karma via `@open-wc/testing-karma`
-   Testing via [SauceLabs](https://saucelabs.com/) via [karma-sauce-launcher](https://github.com/karma-runner/karma-sauce-launcher)

## Setup

### Manual
-   `npm i --save-dev @advanced-rest-client/testing-karma-sl`
-   Copy [karma.sl.config.js](https://github.com/advanced-rest-client/testing-karma-sl/blob/master/demo/karma.sl.config.js) to `karma.sl.config.js`
-   Add these scripts to your package.json
    ```js
    "scripts": {
      "test:sl": "karma start karma.sl.config.js --legacy --coverage"
    },
    ```

### Setup user + key

-   Go to [https://app.saucelabs.com/user-settings](https://app.saucelabs.com/user-settings)
-   Look for "Access Key" and copy it

The `SAUCE_USERNAME` variable is your login to SauceLabs and `SAUCE_ACCESS_KEY` is the key you just coppied.

```bash
# for one time use only
export SAUCE_USERNAME=xxx
export SAUCE_ACCESS_KEY=xxx

# or add them to your .bashrc
echo "export SAUCE_USERNAME=xxx" >> ~/.bashrc
echo "export SAUCE_ACCESS_KEY=xxx" >> ~/.bashrc

# to verify, run:
echo "User: $SAUCE_USERNAME"
echo "Key: $SAUCE_ACCESS_KEY"
```

### Usage
```bash
npm run test:sl
```

### Travis configuration

Do not use `sauce_connect: true` in your Travis configuration file. If that's impossible, set `startConnect` and `startTunnel` options in your `karma.sl.config.js` file:

```javascript
const merge = require('webpack-merge');
const slSettings = require('@advanced-rest-client/testing-karma-sl/sl-settings.js');
const createBaseConfig = require('./karma.conf.js');

module.exports = (config) => {
  const cnf = {
    sauceLabs: {
      testName: 'My component'
    }
  };
  if (process.env.TRAVIS) {
    cnf.browserStack = {
      startTunnel: false
    };
    cnf.sauceLabs.startConnect = false;
    // Use this if you run into trouble receiving data back from SL.
    cnf.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
  }
  config.set(
    merge(slSettings(config), createBaseConfig(config), cnf)
  );

  return config;
};
```
