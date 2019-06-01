/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const slSettings = require('../sl-settings.js');
const createBaseConfig = require('./karma.conf.js');

module.exports = (config) => {
  config.set(
    merge(slSettings(), createBaseConfig(config), {
      sauceLabs: {
        testName: 'advanced-rest-client',
      }
    })
  );
  return config;
};
