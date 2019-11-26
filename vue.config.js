const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
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
    port: process.env.VUE_APP_BASE_PORT,
    proxy: {
      '/usermanager': {
        target: 'http://' + process.env.VUE_APP_PROXY_IP + ':' + process.env.VUE_APP_PROXY_PORT,
        ws: true,
        changeOrigin: true,
        // pathRewrite 作用是将usermanager换成了api
        // 合起来解释就是 我们原来的请求是http://127.0.0.1:8086/usermanager/echo.php
        // 实际上我们的请求已经代理成 http://127.0.0.1:4885/api/echo.php
        pathRewrite: { '^/usermanager': 'api' }
      }
      // '/pdf': {
      //   target: 'http://127.0.0.1:4885',
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: { '^/pdf': '' }
      // }
    }
  },
  // 链式配置 修改插件或loader
  chainWebpack: config => {
    // ============修改目录别名 start ============
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
    // ============修改目录别名 end ==============
    if (process.env.NODE_ENV === 'production') {
      // ============压缩图片 start==============
      // file-loader，url-loader默认配置已经有了,不需要在配置，
      // 如果自己安装可能版本会不一样，会出现background: url([object Object])
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/i)
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({ bypassOnDebug: true })
        .end()
      // ============压缩图片 end==============
      // ============压缩css js start==========
      config.plugin('CompressionWebpackPlugin')
        .use(new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 不删除源文件
        }))
      // ============压缩css js end=============
    }
    if (process.env.NODE_ENV === 'report') {
      // ============分析报告 start=============
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static'
        }])
      // ============分析报告 end===============
    }
  },
  // 配置 webpack 新增简单的插件,
  configureWebpack: config => {
    // 解决ie11兼容ES6
    // config.entry('main').add('babel-polyfill')
    if (process.env.NODE_ENV === 'production') {
      // ============压缩css js start============
      // config.plugins.push(
      //   new CompressionWebpackPlugin({
      //     test: /\.js$|\.html$|\.css$/, // 匹配文件名
      //     threshold: 10240, // 对超过10k的数据压缩
      //     minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
      //     deleteOriginalAssets: false // 不删除源文件,实测时删除源文件在nginx下运行会报错.原因
      //     // 是请求的是app.js,返回的是app.js.gz,浏览器负责解压；如果删除源文件，nginx会找不到映射。
      //   })
      // )
      // ============压缩css js end============
    }
  }
}
