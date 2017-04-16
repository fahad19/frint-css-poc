module.exports = {
  externals: [
    {
      'react': 'React',
      'lodash': '_',
      'frint-react-styles': 'FrintReactStyles',
      'css-framework': 'CssFramework',
      'frint': 'Frint',
      'frint-react': 'FrintReact',

      // ui-kit:
      // map 'css-framework/*' requires to 'CssFramework.*'
      'css-framework/variables.css': 'CssFramework.variables',
      'css-framework/variables': 'CssFramework.variables',
    },

    // Lodash:
    // map 'lodash/*' requires to '_.*' instead
    // for reduced bundle size
    function(context, request, callback) {
      if (/^lodash\/(.*)/.test(request)) {
        var funcName = request.split('/')[1];
        return callback(null, 'root ' + '_.' + funcName);
      }

      callback();
    },

    // css-framework:
    // map 'css-framework/*' requires to 'CssFramework.*'
    function(context, request, callback) {
      if (/^css\-framework\/(.*)/.test(request)) {
        var funcName = request.split('/')[1];
        console.log(request, funcName);
        return callback(null, 'root ' + 'CssFramework.' + funcName);
      }

      callback();
    },
  ]
};
