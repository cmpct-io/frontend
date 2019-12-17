<template>
  <div
    v-if="isLoaded"
    :style="classOverrides"
    v-on:click="resetSpeed()"
    class="circle"
  />
</template>

<script>
import randomiser from '@/services/randomiser.js'

export default {
  data () {
    return {
      isLoaded: false,
      size: 0,
      startTop: 0,
      startLeft: 0,
      speed: 0,
      animationVariant: 0
    }
  },
  computed: {
    classOverrides () {
      const size = `width: ${this.size}px; height: ${this.size}px;`
      const position = `top: ${this.startTop}%; left: ${this.startLeft}%;`
      const animation = `animation-duration: ${this.speed}s;animation-name: translocate_${this.animationVariant};`
      return `${size}${position}${animation}`
    }
  },
  mounted () {
    this.setup()
  },
  methods: {
    setup () {
      this.size = randomiser.generateRandomNumber(50, 300)
      this.startTop = randomiser.generateRandomNumber(-25, 125)
      this.startLeft = randomiser.generateRandomNumber(-25, 125)
      this.resetSpeed()
      const animationVariant = randomiser.generateRandomNumber(1, 10)
      this.animationVariant = animationVariant < 6
        ? 1
        : 2
      this.isLoaded = true
    },
    resetSpeed () {
      this.speed = randomiser.generateRandomNumber(this.speed + 1, 120)
    }
  }
}
</script>

<style>
  .circle {
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    animation-name: translocate_1;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }

  @keyframes translocate_1 {
    0% {
      background-color: #FF0000;
      margin-left: 100px;
      opacity: .15;
    }
    33% {
      background-color: #FFC000;
      margin-left: 300px;
      margin-top: 100px;
      opacity: 0.4;
    }
    66% {
      background-color:#FFFC00;
      margin-left: 10px;
      margin-top: 400px;
      opacity: .15
    }
    100% {
      background-color:#FF00FF;
      opacity: 0;
    }
  }

  @keyframes translocate_2 {
    0% {
      background-color: #FFFC00;
      margin-left: -100px;
      opacity: .15;
    }
    33% {
      background-color: #FF00FF;
      margin-left: -300px;
      margin-top: -50px;
      opacity: 0.4;
    }
    66% {
      background-color:#FFC000;
      margin-left: 100px;
      margin-top: 150px;
      opacity: .15
    }
    100% {
      background-color:#FF0000;
      opacity: 0;
    }
  }
</style>
