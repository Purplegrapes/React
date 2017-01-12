/**
 * Created by zhangqiong on 16/12/20.
 */
/**
 * Created by zhangqiong on 16/12/15.
 */
const webpack = require('webpack');

module.exports = {
  entry: [
    './entry.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  query: {
    plugins: [
      ['import', [{ libraryName: 'antd', style: 'css' }]],
    ],
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css?sourceMap=true!less?sourceMap=true' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
};
