module.exports = function(api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { allowDeclareFields: true }]],
    plugins: [
      ['@babel/plugin-transform-flow-strip-types', {
        allowDeclareFields: true
      }]
    ]
  };
};
