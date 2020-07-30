const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const merge = require('webpack-merge')
// 测试环境的cdn可以用其他标志去区分
const cdn = {
  css: [
    'https://cdn.bootcss.com/element-ui/2.11.1/theme-chalk/index.css'
  ],
  js: [
    'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
    'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
    'https://cdn.bootcss.com/element-ui/2.11.1/index.js',
    'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js'
  ]
}
// externals 打包时排除这模块,模块名称和模块值需要查询
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  'element-ui': 'ELEMENT',
  axios: 'axios'
}
const objectPage = {
  // index: {
  //   entry: 'src/main.js',
  //   template: path.resolve(__dirname, 'src/public/index.html'),
  //   filename: 'index.html',
  //   title: 'index',
  //   // 'src/assets/img/favorite.png' 的作用是把该icon放到和index同级目录
  //   favicon: 'src/assets/img/portal/tel.jpg',
  //   // inject: 'body',
  //   chunks: ['chunk-vendors', 'chunk-common', 'index'],
  //   minify: {
  //     minimize: true, // 是否打包为最小值 ,没有看到有什么作用，网上没有相关资料
  //     removeAttributeQuotes: true, // 移除属性的引号（不常用）
  //     // removeEmptyElements:true,    //删除所有含有空内容的元素。（不常用,慎用）
  //     removeComments: true, // 带HTML注释
  //     collapseWhitespace: true, // 去掉空格
  //     minifyJS: true, // 压缩html里的js 压缩内联js（使用uglify-js进行的压缩）
  //     minifyCSS: true // 压缩html里的css 压缩内联css（使用clean-css进行的压缩）
  //   },
  //   hash: true, // 引入产出的资源时加上哈希避免缓存,在html中的js和css后面加上？hash值
  //   cdn: cdn
  // },
  elementui: {
    entry: 'src/views/elementui/elementui.js',
    template: path.resolve(__dirname, 'src/views/elementui/public/elementui.html'),
    filename: 'elementui.html',
    title: 'elementui',
    // 'src/assets/img/favorite.png' 的作用是把该icon放到和index同级目录
    favicon: 'src/assets/img/portal/kefu.png',
    // inject: 'body',
    chunks: ['chunk-vendors', 'chunk-common', 'elementui'],
    minify: {
      minimize: true, // 是否打包为最小值 ,没有看到有什么作用，网上没有相关资料
      removeAttributeQuotes: true, // 移除属性的引号（不常用）
      // removeEmptyElements:true,    //删除所有含有空内容的元素。（不常用,慎用）
      removeComments: true, // 带HTML注释
      collapseWhitespace: true, // 去掉空格
      minifyJS: true, // 压缩html里的js 压缩内联js（使用uglify-js进行的压缩）
      minifyCSS: true // 压缩html里的css 压缩内联css（使用clean-css进行的压缩）
    },
    hash: true, // 引入产出的资源时加上哈希避免缓存,在html中的js和css后面加上？hash值
    cdn: cdn
  },
  iview: {
    entry: 'src/views/iview/iview.js',
    template: path.resolve(__dirname, 'src/views/iview/public/iview.html'),
    filename: 'iview.html',
    title: 'iview',
    // 'src/assets/img/favorite.png' 的作用是把该icon放到和index同级目录
    favicon: 'src/assets/img/portal/kefu.png',
    // inject: 'body',
    chunks: ['chunk-vendors', 'chunk-common', 'iview'],
    minify: {
      minimize: true,
      removeAttributeQuotes: true,
      // removeEmptyElements:true,
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true
    },
    hash: true,
    cdn: cdn
  }
}
let pages = {}
let pageName = ''
let outputDirPath = ''
// 开发环境
if (process.env.NODE_ENV === 'development') {
  pages = objectPage
  pageName = ''
  outputDirPath = ''
}
// 生产环境
if (process.env.NODE_ENV === 'production') {
  // 获取build后面的参数确定执行哪个文件
  pageName = process.argv[3]
  pages[pageName] = objectPage[pageName]
  outputDirPath = '/'
}
module.exports = {
  // 选项...
  // 这个值和路由中的base:baseUrl是一个值process.env.NODE_ENV === 'production'? '/production-sub-path/': '/'
  // 如果是部署到服务器的根路径 publicPath：'/'
  // 如果是部署到服务器的根路径下的dist目录 那么publicPath：'dist/'
  // 如果是部署到服务器的根路径下的vue-elementUI-pc/dist目录 那么publicPath：'vue-elementUI-pc/dist/'
  // 根本用不到相对路径
  publicPath: 'vue-elementUI-pc/dist/' + pageName + outputDirPath,
  outputDir: 'dist/' + pageName + outputDirPath,
  assetsDir: 'assets',
  // indexPath: 'index.html',
  filenameHashing: true,
  pages: pages,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  devServer: {// 代理
    port: 8080,
    proxy: {
      '/token': {
        target: 'https://aip.baidubce.com/oauth/2.0/token',
        ws: true,
        changeOrigin: true,
        // pathRewrite 作用是将usermanager换成了api
        // 合起来解释就是 我们原来的请求是http://127.0.0.1:8086/usermanager/echo.php https://aip.baidubce.com/oauth/2.0/token
        // 实际上我们的请求已经代理成 http://127.0.0.1:4885/api/echo.php
        pathRewrite: { '^/manager11': 'api' }
      }
      // '/pdf': {
      //   target: 'http://127.0.0.1:4885',
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: { '^/pdf': '' }
      // }
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: !!(process.env.NODE_ENV === 'production'),
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    loaderOptions: {
      sass: {
        // data: '@import "style/_mixin.scss";@import "style/_variables.scss";@import "style/common.scss";' // 全局引入
      }
    }
  },
  // 链式配置/修改插件或loader  如果对一个loader或plugin修改的配置如果是一项的话推荐chainWebpack
  chainWebpack: config => {
    config.externals(externals)
    // config.plugins.delete('preload')
    // config.plugins.delete('prefetch')
    // 抽取公共js和css 可能目前页面比较少，感觉效果不明显
    // ============抽取公共js和css start ============
    // config.optimization.minimize(true)
    // config.optimization.splitChunks({
    //   chunks: 'all', // 表示从哪些chunks里面抽取代码，除了三个可选字符串值 initial、async、all 之外，还可以通过函数来过滤所需的 chunks
    //   maxInitialRequests: 5, // 最大的按需(异步)加载次数，默认为 5
    //   minSize: 100, // 依赖包超过300000bit将被单独打包
    //   automaticNameDelimiter: '-', // 抽取出来的文件的自动生成名字的分割符，默认为 ~
    //   cacheGroups: {
    //     vendor: {
    //       chunks: 'all',
    //       test: /node_modules/,
    //       name: 'vendor'
    //     },
    //     styles: {
    //       name: 'styles',
    //       test: /\.(sa|sc|c)ss$/,
    //       chunks: 'all',
    //       enforce: true
    //     }
    //   }
    // })
    // ============抽取公共js和css end ===========
    // ============修改目录别名 start ============
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
    // ============修改目录别名 end ==============
    if (process.env.NODE_ENV === 'production') {
      // ============输出js start ================
      config.output
        .filename(path.posix.join('assets', `js/[name].[hash].js`))
        .chunkFilename(path.posix.join('assets', `js/[name].[hash].js`))
        .end()
      // ============输出js end ====================
      // ============输出css start =================
      config.plugin('extract-css').tap(() => [{
        filename: path.posix.join('assets', `css/[name].[hash].css`)
      }])
      // ============输出css end ====================
      // ============删除并制定规则 images start ===========
      // const imagesRule = config.module.rule('images')
      // imagesRule.uses.clear()
      // imagesRule.use('file-loader')
      //   .loader('url-loader')
      //   .options({
      //     limit: 4096,
      //     fallback: {
      //       loader: 'file-loader',
      //       options: {
      //         name: path.posix.join('assets', `img/[name].[hash:8].[ext]`)
      //       }
      //     }
      //   })
      // ============删除并制定规则 images end ==============
      // ============修改规则 images start ==================
      config.module
        .rule('images')
        .use('url-loader')
        .tap(options => {
          return merge(options, {
            limit: 4096,
            fallback: {
              loader: 'file-loader',
              options: {
                name: path.posix.join('assets', `img/[name].[hash].[ext]`)
              }
            }
          })
        })
        .end()
      // ============修改规则 images end ====================
      // ============修改规则 svg start =====================
      config.module
        .rule('svg')
        .use('file-loader')
        .tap(options => {
          return merge(options, {
            name: path.posix.join('assets', `img/[name].[hash].[ext]`)
          })
        })
        .end()
      // ============修改规则 svg end ======================
      // file-loader，url-loader默认配置已经有了,不需要在配置，
      // 如果自己安装可能版本会不一样，会出现background: url([object Object])
      // 可以发现在dist/img下面的图片少了一部分，
      // 原因是：默认不超过4096字节会被转换成Base64编码,用require引用的也会被转成和base64，
      // 超出这个限制则会被打包在img文件夹下，同时会用到下面这个loader进行压缩
      // ============插入CND start==============
      // 下面参数这种写法直接要么写在page里面，要么像下面这样写，不能同时写，否则冲突
      // config.plugin('html').tap(args => {
      //   // console.log(args)
      //   args[0].cdn = cdn
      //   return args
      // })
      // 打包时排除这几项  测试后觉得只会在打包的时候排除这些模块，生产模式下不会起作用
      // config.externals(externals)
      // ============插入CND end=================
      // ============压缩html中的css start=======
      // config.plugin('html').tap(args => {
      //   args[0].minify.minifyCSS = true
      //   return args
      // })
      // ============压缩html中的css end=========
    }
    // 专门给report提供，使用方法 npm run report
    if (process.env.VUE_APP_TITLE === 'report') {
      // ============分析报告 start==============
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static'
        }])
      // ============分析报告 end=================
    }
    // ============清除元素之间的空格 start=======
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    // ============清除元素之间的空格 end==========
  },
  // 配置 webpack 新增简单的插件, 如果是多项的话用configureWebpack直接覆写
  configureWebpack: config => {
    // 解决ie11兼容ES6
    // config.entry('main').add('babel-polyfill')
    if (process.env.NODE_ENV === 'production') {
      // ============压缩css js start============
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$|\.png$|\.jpg$|\.ttf$|\.woff$|\.svg$|\.eot$|\.woff2$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 不删除源文件,实测时删除源文件在nginx下运行会报错.原因
          // 是请求的是app.js,返回的是app.js.gz,浏览器负责解压；如果删除源文件，nginx会找不到映射。
        })
      )
      // ============压缩css js end============
      // ============移除console start=========
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: false, // console
              drop_console: true,
              pure_funcs: ['console.log'] // 移除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
      // ============移除console end=========
    }
  }
}
