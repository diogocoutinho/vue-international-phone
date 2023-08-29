module.exports = {
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
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
