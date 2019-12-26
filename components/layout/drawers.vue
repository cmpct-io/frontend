<template>
  <section class="drawers">
    <slot />
  </section>
</template>

<style scoped>
  .drawers {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>
