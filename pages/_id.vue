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
import { CDN_PATH } from '@/services/configuration-service.js'
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

  computed: {
    ...mapState('landing', [
      'routeId',
      'links'
    ]),

    metaTitle () {
      return this.links.length > 1
        ? this.multipleLinksMetaTitle
        : this.links[0].title || this.$t('sharedALink')
    },

    multipleLinksMetaTitle () {
      return this.links[0].title
        ? `${this.links[0].title} ${this.$t('and')} ${this.links.length - 1} ${this.$t('otherLinks')}`
        : this.$t('sharedMultipleLinks')
    },

    metaImage () {
      return this.links[0].screenshotFileName
        ? `${CDN_PATH}/screenshots/${this.links[0].screenshotFileName}`
        : 'https://cdn.cmpct.io/_nuxt/icons/icon_512.d73a66.png'
    }
  },

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
    storageService.addToHistory(this.routeId)
  }
}
</script>

<i18n>
{
  "en": {
    "pageTitle": "cmpct.io: Jump",
    "sharedALink": "A link was shared with you",
    "sharedMultipleLinks": "Multiple links have been shared with you",
    "and": "and",
    "otherLinks": "other link(s) were shared with you"
  },
  "fr": {
    "pageTitle": "cmpct.io: Sauter",
    "sharedALink": "Un lien a été partagé avec vous",
    "sharedMultipleLinks": "Plusieurs liens ont été partagés avec vous",
    "and": "et",
    "otherLinks": "d'autres liens ont été partagés avec vous"
  },
  "es": {
    "pageTitle": "cmpct.io: Saltar",
    "sharedALink": "Un enlace fue compartido contigo",
    "sharedMultipleLinks": "Se han compartido múltiples enlaces contigo",
    "and": "y",
    "otherLinks": "otros enlaces fueron compartidos contigo"
  }
}
</i18n>
