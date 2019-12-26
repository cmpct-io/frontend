<template>
  <section class="drawers">
    <comments-drawer />
    <report-drawer />
  </section>
</template>

<script>
import commentsDrawer from '@/components/drawers/comments.vue'
import reportDrawer from '@/components/drawers/report.vue'

export default {
  components: {
    commentsDrawer,
    reportDrawer
  }
}
</script>

<style scoped>
  .drawers {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>
