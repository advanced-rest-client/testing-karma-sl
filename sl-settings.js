if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
  throw new Error(`
    !!You have to set your SauceLabs username and key!!
    Login and go to https://app.saucelabs.com/user-settings
    then run in your console (or add it to your ~/.bashrc)
    export SAUCE_USERNAME=[username];
    export SAUCE_ACCESS_KEY=[key];
  `);
}
const sauceLabs = {
  testName: 'Component unit test',
};
let browserStack;
if (process.env.TRAVIS) {
  const buildLabel = 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';
  browserStack = {
    build: buildLabel,
    tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
  };
  sauceLabs.build = buildLabel;
  sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
}

/** @typedef {import('karma').ConfigOptions} ConfigOptions */

/**
 * Extends the es5 karma config with a browserstack luncher
 *
 * By default runs tests in the latest stable versions of
 * - Chrome
 * - Firefox
 * - Safari
 * - Edge
 * and IE11.
 * @return {ConfigOptions} Default configuration
 */
module.exports = () => ({
  files: [
    {
      pattern: require.resolve('chai/chai.js')
    }
  ],
  // Try 'websocket' for a faster transmission first. Fallback to 'polling' if necessary.
  transports: ['websocket', 'polling'],
  sauceLabs,
  browserStack,
  customLaunchers: {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome',
      // @ts-ignore
      version: 'latest',
      platform: 'Windows 10',
    },
    'SL_Chrome-1': {
      base: 'SauceLabs',
      browserName: 'chrome',
      // @ts-ignore
      version: 'latest-1',
      platform: 'Windows 10',
    },
    'SL_Firefox': {
      base: 'SauceLabs',
      browserName: 'firefox',
      // @ts-ignore
      version: 'latest',
      platform: 'Windows 10',
    },
    'SL_Firefox-1': {
      base: 'SauceLabs',
      browserName: 'firefox',
      // @ts-ignore
      version: 'latest-1',
      platform: 'Windows 10',
    },
    'SL_Safari-1': {
      base: 'SauceLabs',
      browserName: 'safari',
      // @ts-ignore
      version: 'latest-1',
      platform: 'macOS 10.13',
    },
    'SL_Safari': {
      base: 'SauceLabs',
      browserName: 'safari',
      // @ts-ignore
      version: 'latest',
      platform: 'macOS 10.13',
    },
    'SL_IE_11': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      // @ts-ignore
      version: '11',
    },
    'SL_EDGE': {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      platform: 'Windows 10',
      // @ts-ignore
      version: 'latest',
    },
    'SL_EDGE-1': {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      platform: 'Windows 10',
      // @ts-ignore
      version: 'latest-1',
    },
  },

  browsers: [
    'SL_Chrome',
    'SL_Chrome-1',
    'SL_Firefox',
    'SL_Firefox-1',
    'SL_Safari',
    'SL_Safari-1',
    // 'SL_IE_11',
    'SL_EDGE',
    'SL_EDGE-1',
  ],
  reporters: ['dots', 'saucelabs'],

  browserDisconnectTimeout: 10000,
  browserDisconnectTolerance: 1,
  browserNoActivityTimeout: 4*60*1000,
  captureTimeout: 4*60*1000,

  // client: {
  //   mocha: {
  //   }
  // }
});
