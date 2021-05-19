module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/variables/_colors.scss";`,
      },
    },
  },
};
