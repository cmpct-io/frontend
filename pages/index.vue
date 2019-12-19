<template>
  <container>
    <h1>Get started</h1>
    <p>Paste a link into the box below to compact it</p>
    <generator />
  </container>
</template>

<script>
import container from '@/components/layout/container.vue'
import generator from '@/components/generator.vue'

export default {
  components: {
    container,
    generator
  }
}
</script>
