import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("baseCard", defineAsyncComponent(() => import("E:/study/tsk/docs/.vuepress/components/baseCard.vue")))
  },
}
