import Vue from 'vue'

const components = {}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
