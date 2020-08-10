module.exports = {
  runtimeCompiler: true,
  pwa: {
    name: 'tinyLabs',
    themeColor: '#013C61',
    msTileColor: '#2BDA53',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }
}