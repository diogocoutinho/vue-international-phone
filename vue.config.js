module.exports = {
  productionSourceMap: false,
  css: {
    extract: true,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
};
