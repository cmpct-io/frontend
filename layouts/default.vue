<template>
  <div :class="uiMode">
    <navigator />
    <background />

    <container>
      <nuxt />
    </container>

    <snackbar />
    <image-viewer />
  </div>
</template>

<script>
import '@/styles/animations.scss'
import '@/styles/helpers.scss'
import uiModeMixin from '@/mixins/ui-mode-mixin.vue'
import background from '@/components/background/background.vue'
import navigator from '@/components/navigator/navigator.vue'
import snackbar from '@/components/shared/snackbar.vue'
import container from '@/components/shared/container.vue'
import imageViewer from '@/components/shared/image-viewer.vue'

export default {
  components: {
    background,
    navigator,
    snackbar,
    container,
    imageViewer
  },
  mixins: [uiModeMixin]
}
</script>
