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

// map 'lodash/*' requires to 'lodash.*' instead
// for reduced bundle size
// plugins.push(new webpack.NormalModuleReplacementPlugin(
//   /^lodash\/(.*)/,
//   function (resource) {
//     console.log(resource.request);
//     // resource.request = resource.request.replace('/', '.');
//   }
// ));

var filename = !minify
  ? 'frint-react-styles.js'
  : 'frint-react-styles.min.js';

module.exports = {
  entry: __dirname + '/src',
  output: {
    path: __dirname + '/../build',
    filename: filename,
    libraryTarget: 'this',
    library: 'FrintReactStyles'
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
      }
    ]
  }
};
