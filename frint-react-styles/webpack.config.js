var webpack = require('webpack');

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
  externals: {
    'react': 'React',
    'lodash': {
      commonjs: 'lodash',
      amd: 'lodash',
      root: '_',
    },

    // map 'lodash/*' requires to '_.*' instead
    // for reduced bundle size
    'lodash/isFunction': '_.isFunction',
    'lodash/isObject': '_.isObject',
    'lodash/isBoolean': '_.isBoolean',
    'lodash/isUndefined': '_.isUndefined',
    'lodash/forEach': '_.forEach',
    'lodash/assign': '_.assign',
    'lodash/isObject': '_.isObject',
    'lodash/isObject': '_.isObject',
    'lodash/isArray': '_.isArray',
    'lodash/isObject': '_.isObject',
    'lodash/isFunction': '_.isFunction',
    'lodash/filter': '_.filter',
    'lodash/trim': '_.trim',
  },
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
