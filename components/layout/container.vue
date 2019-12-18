<template>
  <section class="container">
    <slot />
  </section>
</template>

<style scoped>
  section.container {
    position: relative;
    z-index: 50;
    flex-grow: 1;
  }
</style>
