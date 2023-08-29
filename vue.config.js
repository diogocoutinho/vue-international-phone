module.exports = {
  publicPath: '/@diogoccoutinho/vue-international-phone/',
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
