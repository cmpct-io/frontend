<template>
  <div class="content flex-container">
    <section class="container flex-grow">
      <slot />
    </section>
  </div>
</template>

<style scoped>
  .content {
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

  section.container {
    position: relative;
    z-index: 50;
  }
</style>
