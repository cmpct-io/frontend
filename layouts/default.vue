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
  font-size: 22px;
  word-spacing: 1px;
  box-sizing: border-box;
  color: white;
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
  user-select: none;
}

h1 {
  font-size: 50px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  font-size: 2rem;
}

h4 {
  font-size: 1.25rem;
}

p {
  margin-bottom: 30px;
  font-size: 1rem;
}
</style>
