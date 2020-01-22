<template>
  <div>
    <links-group />
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
import linksGroup from '@/components/links/group.vue'
import commentsViewer from '@/components/comments/viewer.vue'
import reportsViewer from '@/components/reports/viewer.vue'

export default {
  head () {
    return {
      title: this.$t('pageTitle'),
      meta: [
        { property: 'og:site_name', name: 'og:site_name', hid: 'og:site_name', content: this.target },
        { property: 'og:title', name: 'og:title', hid: 'og:title', content: `Visit: ${this.target}` }
      ]
    }
  },
  components: {
    tabs,
    commentsTab,
    reportsTab,
    linksGroup,
    commentsViewer,
    reportsViewer
  },
  computed: {
    ...mapState('landing', [
      'routeId',
      'target'
    ])
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
