<template>
  <div class="c-content u-flex-container">
    <section class="c-content-container u-flex-grow">
      <slot />
    </section>
  </div>
</template>

<style scoped>
  .c-content {
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

  .c-content-container {
    position: relative;
    z-index: 50;
  }
</style>
