<template>
  <div>
    <div v-show="show" class="animated fadeIn">
      <h1>Get started</h1>
      <p class="mb">
        Create shorter, safer links you can share.
      </p>
      <p>
        Paste your link into the box below to get started.
      </p>
      <generator />
    </div>

    <history v-on:toggled="toggle" />
  </div>
</template>

<script>
import generator from '@/components/generator/generator.vue'
import history from '@/components/history/history.vue'
import showMixin from '@/mixins/show-mixin.vue'

export default {
  head () {
    return {
      title: `cmpct.io: shorter, safer links`
    }
  },
  components: {
    generator,
    history
  },
  mixins: [showMixin],
  created () {
    this.show = true
  }
}
</script>
