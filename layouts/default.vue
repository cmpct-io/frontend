<template>
  <div>
    <navigator />
    <background />
    <container>
      <nuxt />
    </container>
    <snackbar />
  </div>
</template>

<script>
import '@/styles/animations.scss'
import '@/styles/helpers.scss'
import background from '@/components/background/background.vue'
import navigator from '@/components/navigator/navigator.vue'
import snackbar from '@/components/layout/snackbar.vue'
import container from '@/components/layout/container.vue'

export default {
  components: {
    background,
    navigator,
    snackbar,
    container
  }
}
</script>
