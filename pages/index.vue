<template>
  <container>
    <div v-show="show" class="index">
      <h1>Get started</h1>
      <p>Paste a link into the box below to compact it</p>
      <generator />
    </div>

    <history-link v-on:toggled="toggle" />
  </container>
</template>

<script>
import container from '@/components/layout/container.vue'
import generator from '@/components/generator.vue'
import historyLink from '@/components/generator/history-link.vue'

export default {
  components: {
    container,
    generator,
    historyLink
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    toggle (historyDisplayed) {
      this.show = !historyDisplayed
    }
  }
}
</script>
