const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  externals: Object.keys(require('../package.json').dependencies),
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2', // 最新commonjs模块方案
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_BASE': '"http://127.0.0.1:3000"',
      'process.env.SERVER': 'true',
    })
  ]
})
