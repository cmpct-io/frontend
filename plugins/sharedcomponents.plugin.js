import Vue from 'vue'
import spoiler from '@/components/shared/spoiler.vue'
import circleButton from '@/components/shared/circle-button.vue'
import container from '@/components/shared/container.vue'
import tabs from '@/components/shared/tabs.vue'
import panel from '@/components/shared/panel.vue'

const sharedComponents = [
  spoiler,
  circleButton,
  container,
  tabs,
  panel
]

sharedComponents.forEach((component) => {
  Vue.component(component.name, component)
})
