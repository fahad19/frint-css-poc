module.exports = {
  plugins: [
    require('postcss-modules')({
      generateScopedName: '[local]',
    }),
    require('postcss-modules-scope'),
    // require('precss')({ /* ...options */ }),
    // require('autoprefixer')({ /* ...options */ }),
  ],
};
