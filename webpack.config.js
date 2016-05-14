'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       {
         test: /\.jsx?$/,
         exclude: /(node_modules|bower_components)/,
         loader: 'babel-loader',
         query: {
          presets: [
            'es2015',
            'stage-0',
            'react'
          ],
          cacheDirectory: 'cache'
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/,
      }
    ]
  }
  // , plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   })
  // ]
};
