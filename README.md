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
