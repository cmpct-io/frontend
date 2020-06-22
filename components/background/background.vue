<template>
  <section class="c-background">
    <animated-circle
      v-for="element in elements"
      :key="element.id" />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState('background', [
    'elements'
  ]),

  mounted () {
    this.setupBackground()
  },

  methods: mapActions('background', [
    'setupBackground'
  ])
}
</script>

<style scoped lang="scss">
  .c-background {
    background-color: black;
    height: 100vh;
    overflow: hidden;

    .light & {
      background-color: white;
    }
  }
</style>
