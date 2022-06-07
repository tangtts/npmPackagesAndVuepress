const { defaultTheme } = require('@vuepress/theme-default')
const { path } = require('@vuepress/utils')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
module.exports = {
  lang: 'zh-CN',
  title: '你好,VuePress!',
  description: '这是我的第一个 VuePress 站点',
  logo: '/assets/img/logo.png',
  theme: defaultTheme({
    sidebar: [
      "/componentDocs/card"
    ]
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ]
}