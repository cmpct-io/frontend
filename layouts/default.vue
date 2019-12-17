<template>
  <div class="layout">
    <navigator />
    <background />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import background from '@/components/layout/background.vue'
import navigator from '@/components/navigator/navigator.vue'

export default {
  components: {
    background,
    navigator
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Tomorrow&display=swap');

html {
  font-family: 'Tomorrow', sans-serif;
  font-size: 20px;
  word-spacing: 1px;
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
