var webpack = require('webpack');

var config = require('../config');

var minify = process.env.DIST_MIN;
var plugins = !minify
  ? []
  : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  ];

var filename = !minify
  ? 'ui-kit.js'
  : 'ui-kit.min.js';

module.exports = {
  entry: __dirname + '/src',
  output: {
    path: __dirname + '/../build',
    filename: filename,
    libraryTarget: 'this',
    library: 'UIKit'
  },
  externals: config.externals,
  target: 'web',
  plugins: plugins,
  // https://github.com/webpack-contrib/css-loader/issues/454
  node: {
    Buffer: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'travix'
          ]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            // options: {
            //   plugins: function () {
            //     return [
            //       require('precss'),
            //       require('autoprefixer'),
            //     ];
            //   }
            // }
          }
        ]
      }
    ]
  }
};
