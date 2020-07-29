{
  mode: 'production',
  context: '/Users/luguofei/Sites/vue-elementUI-pc',
  devtool: false,
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/luguofei/Sites/vue-elementUI-pc/dist',
    filename: 'assets/js/[name].[hash].js',
    publicPath: '/vue-elementUI-pc/dist/',
    chunkFilename: 'assets/js/[name].[hash].js'
  },
  resolve: {
    alias: {
      '@': '/Users/luguofei/Sites/vue-elementUI-pc/src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      assets: '/Users/luguofei/Sites/vue-elementUI-pc/src/assets',
      components: '/Users/luguofei/Sites/vue-elementUI-pc/src/components'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/luguofei/Sites/vue-elementUI-pc/node_modules',
      '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/@vue/cli-plugin-eslint/node_modules',
      '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/luguofei/Sites/vue-elementUI-pc/node_modules',
      '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/.cache/vue-loader',
              cacheIdentifier: '5facda27'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: true
              },
              cacheDirectory: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/.cache/vue-loader',
              cacheIdentifier: '5facda27'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'assets/img/[name].[hash].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[hash].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'assets/media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'assets/fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  },
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  },
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  },
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  },
                  indentedSyntax: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/.cache/babel-loader',
              cacheIdentifier: 'f05f9392'
            }
          },
          /* config.module.rule('js').use('thread-loader') */
          {
            loader: 'thread-loader'
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'babel-loader'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/@vue/cli-service/lib'
        ],
        use: [
          /* config.module.rule('eslint').use('eslint-loader') */
          {
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '5e11f113',
              emitWarning: true,
              emitError: false,
              eslintPath: '/Users/luguofei/Sites/vue-elementUI-pc/node_modules/eslint',
              formatter: function () { /* omitted long function */ }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          VUE_APP_BASE_IP: '"127.0.0.1"',
          VUE_APP_BASE_PORT: '"4886"',
          VUE_APP_BAIDU_URL: '"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su"',
          NODE_ENV: '"production"',
          BASE_URL: '"/vue-elementUI-pc/dist/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'assets/css/[name].[hash].css'
      }
    ),
    /* config.plugin('optimize-css') */
    new OptimizeCssnanoPlugin(
      {
        sourceMap: false,
        cssnanoOptions: {
          preset: [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false
            }
          ]
        }
      }
    ),
    /* config.plugin('hash-module-ids') */
    new HashedModuleIdsPlugin(
      {
        hashDigest: 'hex'
      }
    ),
    /* config.plugin('named-chunks') */
    new NamedChunksPlugin(
      function () { /* omitted long function */ }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true,
          minifyCSS: true
        },
        template: '/Users/luguofei/Sites/vue-elementUI-pc/public/index.html',
        cdn: {
          css: [],
          js: [
            'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
            'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js',
            'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
            'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js'
          ]
        },
        title: 'template-pc'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: '/Users/luguofei/Sites/vue-elementUI-pc/public',
          to: '/Users/luguofei/Sites/vue-elementUI-pc/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    /* config.plugin('CompressionWebpackPlugin') */
    {},
    {
      options: {
        test: /\.js$|\.html$|\.css$/,
        include: undefined,
        exclude: undefined,
        cache: false,
        algorithm: function () { /* omitted long function */ },
        compressionOptions: {
          level: 9
        },
        filename: '[path].gz[query]',
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      }
    },
    {
      options: {
        test: /\.js(\?.*)?$/i,
        warningsFilter: function () {
              return true;
            },
        extractComments: false,
        sourceMap: false,
        cache: false,
        cacheKeys: function (defaultCacheKeys) {
              return defaultCacheKeys;
            },
        parallel: true,
        include: undefined,
        exclude: undefined,
        minify: undefined,
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: false,
            drop_console: true,
            pure_funcs: [
              'console.log'
            ]
          },
          output: {
            comments: /^\**!|@preserve|@license|@cc_on/
          }
        }
      }
    }
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
