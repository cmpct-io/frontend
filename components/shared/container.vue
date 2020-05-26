<template>
  <div class="c-container u-flex-container">
    <section class="c-container-inner u-flex-grow">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped>
  .c-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    text-align: center;
    user-select: none;
    padding: 0 10px;
  }

  .c-container-inner {
    position: relative;
    z-index: 50;
  }
</style>
