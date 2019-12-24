<template>
  <div class="layout">
    <navigator />
    <background />
    <nuxt />
  </div>
</template>

<script>
import '@/styles/animations.scss'
import '@/styles/helpers.scss'
import background from '@/components/layout/background.vue'
import navigator from '@/components/navigator/navigator.vue'

export default {
  components: {
    background,
    navigator
  }
}
</script>
