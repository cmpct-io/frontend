<template>
  <div>
    <render-target />
    <comments-viewer />
    <reports-viewer />
    <tabs>
      <comments-tab />
      <reports-tab />
    </tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import storageService from '@/services/storage-service.js'
import tabs from '@/components/shared/tabs.vue'
import commentsTab from '@/components/comments/tab.vue'
import reportsTab from '@/components/reports/tab.vue'
import renderTarget from '@/components/routes/render-target.vue'
import commentsViewer from '@/components/comments/viewer.vue'
import reportsViewer from '@/components/reports/viewer.vue'

export default {
  head () {
    return {
      title: this.$t('pageTitle')
    }
  },
  components: {
    tabs,
    commentsTab,
    reportsTab,
    renderTarget,
    commentsViewer,
    reportsViewer
  },
  computed: {
    ...mapState('landing', [
      'routeId'
    ])
  },
  async fetch ({ store, route, router, error }) {
    const routeId = route.params.id
    const isValid = await store.dispatch('landing/initialise', routeId)
      .catch((err) => {
        error({
          statusCode: err.response.status
        })
      })

    if (isValid) {
      await store.dispatch('comments/loadComments', routeId)
      await store.dispatch('reports/loadReports', routeId)
    }
  },
  mounted () {
    storageService.addToHistory(this.routeId)
  }
}
</script>

<i18n>
{
  "en": {
    "pageTitle": "cmpct.io: Jump"
  },
  "fr": {
    "pageTitle": "cmpct.io: Sauter"
  },
  "es": {
    "pageTitle": "cmpct.io: Saltar"
  }
}
</i18n>
