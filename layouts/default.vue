<template>
  <div :class="uiMode">
    <navigator />
    <background />

    <container>
      <nuxt />
    </container>

    <snackbar />
    <metadata />
  </div>
</template>

<script>
import '@/styles/animations.scss'
import '@/styles/helpers.scss'
import uiModeMixin from '@/mixins/ui-mode-mixin.vue'
import seoMixin from '@/mixins/seo-mixin.vue'
import background from '@/components/background/background.vue'
import navigator from '@/components/navigator/navigator.vue'
import snackbar from '@/components/shared/snackbar.vue'

export default {
  components: {
    background,
    navigator,
    snackbar
  },

  mixins: [
    uiModeMixin,
    seoMixin
  ]
}
</script>
