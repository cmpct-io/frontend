<template>
  <div class="layout">
    <background />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import background from '@/components/layout/background.vue'

export default {
  components: {
    background
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Tomorrow&display=swap');

html {
  font-family: 'Tomorrow', sans-serif;
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
