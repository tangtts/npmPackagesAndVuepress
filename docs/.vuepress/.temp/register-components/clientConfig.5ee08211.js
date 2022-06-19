import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("baseCard", defineAsyncComponent(() => import("E:/front 学习/npmPackagesAndVuepress/docs/.vuepress/components/baseCard.vue")))
  },
}
