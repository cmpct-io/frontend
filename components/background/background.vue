<template>
  <section class="background">
    <animated-circle
      v-for="element in elements"
      :key="element.id"
    />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import animatedCircle from '@/components/background/circle.vue'

export default {
  components: {
    animatedCircle
  },
  computed: {
    ...mapState('background', ['elements'])
  },
  mounted () {
    this.setupBackground()
  },
  methods: {
    ...mapActions('background', ['setupBackground'])
  }
}
</script>

<style scoped>
  .background {
    background-color: black;
    height: 100vh;
    overflow: hidden;
  }
</style>
