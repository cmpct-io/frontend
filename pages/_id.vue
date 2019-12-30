<template>
  <container>
    <render-target />
    <comments-viewer />
    <reports-viewer />

    <drawers>
      <comments />
      <reports />
    </drawers>
  </container>
</template>

<script>
import { mapActions } from 'vuex'
import container from '@/components/layout/container.vue'
import drawers from '@/components/layout/drawers.vue'
import comments from '@/components/comments/drawer.vue'
import reports from '@/components/reports/drawer.vue'
import renderTarget from '@/components/routes/render-target.vue'
import commentsViewer from '@/components/comments/viewer.vue'
import reportsViewer from '@/components/reports/viewer.vue'

export default {
  components: {
    container,
    drawers,
    comments,
    reports,
    renderTarget,
    commentsViewer,
    reportsViewer
  },
  async created () {
    this.reset()
    const routeId = this.$router.currentRoute.path.slice(1)
    await this.initialise(routeId)
    await this.loadComments(routeId)
    await this.loadReports(routeId)
  },
  methods: {
    ...mapActions('landing', [
      'initialise',
      'setPanel',
      'reset'
    ]),
    ...mapActions('comments', [
      'loadComments'
    ]),
    ...mapActions('reports', [
      'loadReports'
    ])
  }
}
</script>
