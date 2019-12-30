<template>
  <div>
    <navigator />
    <background />
    <nuxt />
    <snackbar />
  </div>
</template>

<script>
import '@/styles/animations.scss'
import '@/styles/helpers.scss'
import background from '@/components/background/background.vue'
import navigator from '@/components/navigator/navigator.vue'
import snackbar from '@/components/layout/snackbar.vue'

export default {
  components: {
    background,
    navigator,
    snackbar
  }
}
</script>
