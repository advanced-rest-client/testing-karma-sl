if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
  throw new Error(`
    !!You have to set your SauceLabs username and key!!
    Login and go to https://app.saucelabs.com/user-settings
    then run in your console (or add it to your ~/.bashrc)
    export SAUCE_USERNAME=[username];
    export SAUCE_ACCESS_KEY=[key];
  `);
}
/**
 * Extends the es5 karma config with a browserstack luncher
 *
 * By default runs tests in the latest stable versions of
 * - Chrome
 * - Firefox
 * - Safari
 * - Edge
 * and IE11.
 * @return {Object} Default configuration
 */
module.exports = () => ({

  sauceLabs: {
    testName: 'Component test unit'
  },

  customLaunchers: {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: 'latest',
      platform: 'Windows 10'
    },
    'SL_Chrome-1': {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: 'latest-1',
      platform: 'Windows 10'
    },
    'SL_Firefox': {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: 'latest',
      platform: 'Windows 10'
    },
    'SL_Firefox-1': {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: 'latest-1',
      platform: 'Windows 10'
    },
    'SL_Safari-1': {
      base: 'SauceLabs',
      browserName: 'safari',
      version: 'latest-1',
      platform: 'macOS 10.13'
    },
    'SL_Safari': {
      base: 'SauceLabs',
      browserName: 'safari',
      version: 'latest',
      platform: 'macOS 10.13'
    },
    'SL_IE_11': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    },
    'SL_EDGE': {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      platform: 'Windows 10',
      version: 'latest'
    }
  },

  browsers: [
    'SL_Chrome',
    'SL_Chrome-1',
    'SL_Firefox',
    'SL_Firefox-1',
    'SL_Safari',
    'SL_Safari-1',
    'SL_IE_11',
    'SL_EDGE'
  ],
  reporters: ['dots', 'saucelabs']
});
