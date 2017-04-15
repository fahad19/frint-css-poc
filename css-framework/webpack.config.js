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
  ? 'css-framework.js'
  : 'css-framework.min.js';

module.exports = {
  entry: __dirname,
  output: {
    path: __dirname + '/../build',
    filename: filename,
    libraryTarget: 'this',
    library: 'CssFramework'
  },
  // https://github.com/webpack-contrib/css-loader/issues/454
  node: {
    Buffer: false,
  },
  externals: config.externals,
  target: 'web',
  plugins: plugins,
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
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  }
};
