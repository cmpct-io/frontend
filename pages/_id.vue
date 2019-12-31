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
import { mapState } from 'vuex'
import storageService from '@/services/storage-service.js'
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
  computed: {
    ...mapState('landing', ['routeId'])
  },
  async fetch ({ store, route, router, error }) {
    const routeId = route.params.id
    const isValid = await store.dispatch('landing/initialise', routeId)

    if (isValid) {
      await store.dispatch('comments/loadComments', routeId)
      await store.dispatch('reports/loadReports', routeId)
    } else {
      error({
        statusCode: 404,
        message: 'The server successfully processed the request and is not returning any content.'
      })
    }
  },
  mounted () {
    storageService.addToHistory(this.routeId)
  }
}
</script>
