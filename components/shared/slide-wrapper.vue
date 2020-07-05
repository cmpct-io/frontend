<template>
  <div
    @wheel="scrollWheel"
    class="c-slideWrapper">
    <slide :slide-number="1" :active-slide="activeSlide">
      <slot name="one" />
    </slide>

    <slide :slide-number="2" :active-slide="activeSlide">
      <slot name="two" />
    </slide>
  </div>
</template>

<script>
import Debounce from '@/services/debounce.js'
export default {
  data () {
    return {
      activeSlide: 1,
      totalSlides: 2
    }
  },
  methods: {
    scrollWheel: Debounce(function (event) {
      if (event.deltaY < 0) {
        this.previousSlide()
      } else if (event.deltaY > 0) {
        this.nextSlide()
      }
    }, 100),

    nextSlide () {
      if (this.activeSlide < this.totalSlides) {
        this.activeSlide++
      }
    },

    previousSlide () {
      if (this.activeSlide > 1) {
        this.activeSlide--
      }
    }
  }
}
</script>

<style scoped>
.c-slideWrapper {
  position: relative;
  overflow: hidden;
  height: 100vh;
}
</style>
