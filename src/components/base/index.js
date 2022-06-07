

import baseCard from "./Card.vue";

export default {
  install(vue) {
    vue.component(baseCard.name, baseCard)
  }
}
