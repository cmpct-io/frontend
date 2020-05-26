<template functional>
  <section class="c-tabs">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Tabs'
}
</script>

<style scoped>
  .c-tabs {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>
