<template>
  <container>
    <h1>Ready to jump?</h1>
    <p>The link you visited is an alias for a website, do you want to visit it?</p>

    <a :href="parameter" class="box with-hover" title="Click to navigate">
      <font-awesome-icon icon="globe" class="no-margin" />
      <p v-text="parameter" />
      <font-awesome-icon icon="chevron-right" class="no-margin" />
    </a>

    <drawers>
      <comments />
      <reports />
    </drawers>
  </container>
</template>

<script>
import container from '@/components/layout/container.vue'
import drawers from '@/components/layout/drawers.vue'
import comments from '@/components/comments/comments.vue'
import reports from '@/components/reports/reports.vue'

export default {
  components: {
    container,
    drawers,
    comments,
    reports
  },
  computed: {
    parameter () {
      return this.$router.currentRoute.path.slice(1)
    }
  },
  mounted () {
    // Load Route

    // Display Comments / Reports
  }
}
</script>
