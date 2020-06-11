const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api/': {
        target: 'https://music.ylater.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {},
      },
    },
    port: 2048,
  },
  lintOnSave: false,
  pwa: {
    name: 'YLATER',
    themeColor: '#333333',
    msTileColor: '#ffffff',
    workboxOptions: {
      runtimeCaching: [{
        urlPattern: new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
        handler: 'cacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 30
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }]
    }
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin()
    ]
  },
  chainWebpack: config => {
    config.externals = {
      AMap: 'AMap'
    }
  }

}