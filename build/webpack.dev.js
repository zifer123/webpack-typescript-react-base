const baseConfig = require('./webpack.base');
const { resolve } = require('./utils');

baseConfig.devServer = {
  contentBase: resolve('../dist'),
  port: 8081,
  compress: true,
};

module.exports = baseConfig;
