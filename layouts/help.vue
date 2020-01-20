<template>
  <div>
    <navigator />
    <background />
    <div class="help-layout">
      <nuxt />
    </div>
  </div>
</template>

<script>
import '@/styles/helpers.scss'
import background from '@/components/background/background.vue'
import navigator from '@/components/navigator/navigator.vue'

export default {
  components: {
    background,
    navigator
  }
}
</script>

<style scoped>
.help-layout {
  position: fixed;
  top: 85px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  text-align: center;
  overflow: auto;
}
</style>
