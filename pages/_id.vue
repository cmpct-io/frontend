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
import routeMetadataMixin from '@/mixins/route-metadata-mixin.vue'
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
        { property: 'og:title', name: 'og:title', hid: 'og:title', content: this.metaTitle },
        { property: 'og:image', name: 'og:image', hid: 'og:image', content: this.metaImage }
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

  mixins: [routeMetadataMixin],

  computed: mapState('landing', [
    'routeId',
    'links'
  ]),

  async fetch ({ store, route, router, error }) {
    const routeId = route.params.id
    const isValid = await store.dispatch('landing/initialise', routeId)

    if (isValid) {
      await Promise.all([
        await store.dispatch('comments/loadComments', routeId),
        await store.dispatch('reports/loadReports', routeId)
      ])
    } else {
      error({
        statusCode: 404,
        message: 'The server successfully processed the request and is not returning any content.'
      })
    }
  },

  mounted () {
    this.addHistory()
  }
}
</script>

<i18n>
{
  "en": {
    "pageTitle": "cmpct.io | Jump"
  },
  "fr": {
    "pageTitle": "cmpct.io | Sauter"
  },
  "es": {
    "pageTitle": "cmpct.io | Saltar"
  }
}
</i18n>
