module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/variables/_colors.scss";`,
      },
    },
  },
};
