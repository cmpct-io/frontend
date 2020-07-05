<template>
  <transition name="slide-fade">
    <section
      v-show="activeSlide === slideNumber"
      :class="['c-slide', { 'c-slide--active' : activeSlide === slideNumber }]">
      <div class="u-flex-grow">
        <slot />
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    activeSlide: {
      type: Number,
      required: true
    },

    slideNumber: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.c-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}

.c-slide--active {
  z-index: 10;
}
</style>
