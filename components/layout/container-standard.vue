<template>
  <div class="content">
    <section class="container">
      <slot />
    </section>
  </div>
</template>

<style scoped>
  .content {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    text-align: center;
    user-select: none;
  }

  section.container {
    position: relative;
    z-index: 50;
    text-align: left;
    padding: 40px;
  }
</style>
