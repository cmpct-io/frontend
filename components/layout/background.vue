<template>
  <section class="background">
    <animated-circle
      v-for="element in elements"
      :key="element.id"
    />
  </section>
</template>

<script>
import randomiser from '@/services/randomiser.js'
import animatedCircle from '@/components/layout/circle.vue'

export default {
  components: {
    animatedCircle
  },
  data () {
    return {
      elements: []
    }
  },
  mounted () {
    let elementCount = randomiser.generateRandomNumber(20, 50)

    while (elementCount > 0) {
      this.elements.push({
        id: this.elements.length + 1
      })

      elementCount = elementCount - 1
    }

    console.log(this.elements)
  }
}
</script>

<style scoped>
  .background {
    background-color: black;
    height: 100vh;
    overflow: hidden;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
  }
</style>
