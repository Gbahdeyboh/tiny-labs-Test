module.exports = {
  runtimeCompiler: true,
  pwa: {
    name: 'tinyLabs',
    themeColor: '#3E4491',
    msTileColor: '#3E4491',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }
}