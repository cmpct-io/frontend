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
        { property: 'og:title', name: 'og:title', hid: 'og:title', content: this.metaTitle }
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
      'links'
    ]),
    metaTitle () {
      return this.links.length > 1
        ? `Shared ${this.links.length} links with you`
        : 'Shared a link with you'
    }
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
