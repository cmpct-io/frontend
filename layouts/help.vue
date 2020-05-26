<template>
  <div :class="uiMode">
    <navigator />
    <background />

    <section class="c-help u-noScroll">
      <nuxt />
    </section>
    <metadata />
  </div>
</template>

<script>
import '@/styles/animations.scss'
import '@/styles/helpers.scss'
import uiModeMixin from '@/mixins/ui-mode-mixin.vue'
import background from '@/components/background/background.vue'
import navigator from '@/components/navigator/navigator.vue'

export default {
  components: {
    background,
    navigator
  },

  mixins: [uiModeMixin]
}
</script>

<style scoped>
.c-help {
  position: fixed;
  top: 85px;
  width: 100%;
  bottom: 0;
  padding: 10px;
  text-align: center;
}
</style>
