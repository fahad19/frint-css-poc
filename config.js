module.exports = {
  externals: {
    'react': 'React',
    'lodash': '_',
    'frint-react-styles': 'FrintReactStyles',
    'css-framework': 'CssFramework',

    // ui-kit:
    // map 'css-framework/*' requires to 'CssFramework.*'
    'css-framework/variables.css': 'CssFramework.variables',

    // Lodash:
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
  }
};
