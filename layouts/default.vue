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

export default {
  mixins: [
    uiModeMixin,
    seoMixin
  ]
}
</script>
