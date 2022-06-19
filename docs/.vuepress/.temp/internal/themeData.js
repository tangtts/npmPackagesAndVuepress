export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"关于\",\"link\":\"/docs/about\"},{\"text\":\"前端学习\",\"children\":[\"/docs/guide/JS.md\",\"/docs/guide/CSS.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"},\"/zh\":{\"selectLanguageName\":\"简体中文\"}},\"sidebar\":{\"/docs/guide/\":[{\"text\":\"导航\",\"children\":[\"/docs/guide/JS.md\",\"/docs/guide/CSS.md\"]}],\"/docs/about/\":[{\"text\":\"关于\",\"link\":\"/docs/about\"}]},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
