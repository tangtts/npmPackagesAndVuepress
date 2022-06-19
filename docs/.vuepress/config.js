const { defaultTheme } = require('@vuepress/theme-default')
const { path } = require('@vuepress/utils')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
module.exports = {
  // locales: {
  //   '/': {
  //     lang: 'en-US',
  //   },
  //   '/docs/zh': {
  //     lang: 'zh-CN',
  //   },
  // },
  lang: 'zh-CN',
  title: '你好,VuePress!',
  description: '这是我的第一个 VuePress 站点',
  logo: '/image/logo.png',
  repo: 'https://github.com/tangtts/npmPackagesAndVuepress',

  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: '关于',
        link: '/docs/about',
      },
      // NavbarGroup
      {
        text: '前端学习',
        children: ['/docs/guide/JS.md', '/docs/guide/CSS.md'],
      },
    ],
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh': {
        selectLanguageName: '简体中文',
      },
    },

    sidebar: {
      '/docs/guide/': [
        {
          text: '导航',
          children: ['/docs/guide/JS.md', '/docs/guide/CSS.md'],
        },
      ],
      '/docs/about/': [
        {
          text: '关于',
          link: "/docs/about",
        },
      ],
    },
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ]
}