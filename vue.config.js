// vue.config.js
module.exports = {
  // 选项...
  // 这个值和路由中的base:baseUrl是一个值process.env.NODE_ENV === 'production'? '/production-sub-path/': '/'
  // 如果是部署到服务器的根路径 publicPath：'/'
  // 如果是部署到服务器的根路径下的dist目录 那么publicPath：'dist/'
  // 如果是部署到服务器的根路径下的vue-elementUI-pc/dist目录 那么publicPath：'vue-elementUI-pc/dist/'
  // 根本用不到相对路径
  publicPath: 'vue-elementUI-pc/dist/',
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: undefined,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  devServer: {// 代理
    port: 8086,
    proxy: {
      '/usermanager': {
        target: 'http://127.0.0.1:4885',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/usermanager': '' }
      },
      '/pdf': {
        target: 'http://127.0.0.1:4886',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/pdf': '' }
      }
    }
  }
}
