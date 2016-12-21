/**
 * Created by zhangqiong on 16/12/20.
 */
/**
 * Created by zhangqiong on 16/12/15.
 */
const webpack = require('webpack');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: 'style!css?sourceMap=true!less?sourceMap=true'},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  devtool: "inline-source-map"
};
