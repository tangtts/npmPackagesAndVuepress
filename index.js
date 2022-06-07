

import baseCard from "./src/components/base/Card.vue";

const components = [baseCard]

export default {
  install(vue) {
    components.map((component) => {
      vue.component(component.name, component)
    })
  }
}

