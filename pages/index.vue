<template>
  <section class="fill-screen">
    <h1>Compact.io</h1>
    <p>Paste a link into the box below to compact it</p>
    <generator />
  </section>
</template>

<script>
import generator from '@/components/generator.vue'

export default {
  components: {
    generator
  }
}
</script>

<style scoped>
  section.fill-screen{
    position: relative;
    z-index: 50;
    flex-grow: 1;
  }

  h1 {
    color: white;
    font-size: 50px;
    letter-spacing: 2px;
  }

  p {
    color: white;
    margin-bottom: 30px;
    font-size: 24px;
  }
</style>
