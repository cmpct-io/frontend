<template>
  <section>
    <links-group />
    <comments-viewer />
    <reports-viewer />
    <shared-image-viewer />

    <shared-tabs>
      <comments-tab />
      <reports-tab />
    </shared-tabs>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { STORAGE_PATH } from '@/services/configuration-service.js'
import historyService from '@/services/history-service.js'

export default {
  head () {
    return {
      title: `cmpct.io | ${this.metaTitle}`,
      meta: [
        { property: 'og:title', name: 'og:title', hid: 'og:title', content: this.metaTitle },
        { property: 'og:image', name: 'og:image', hid: 'og:image', content: this.metaImage },
        { property: 'og:url', name: 'og:url', hid: 'og:url', content: `https://cmpct.io${this.$router.currentRoute.fullPath}/` }
      ]
    }
  },

  computed: {
    ...mapState('activeRoute', [
      'routeId',
      'links',
      'processDate'
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
        ? `${STORAGE_PATH}/screenshots/${this.links[0].screenshotFileName}`
        : 'https://cdn.cmpct.io/_nuxt/icons/icon_512.d73a66.png'
    }
  },

  watch: {
    processDate () {
      historyService.add(this.routeId, this.metaTitle)
    }
  },

  async fetch ({ store, route, router, error }) {
    const routeId = route.params.id
    const isValid = await store.dispatch('activeRoute/initialise', routeId)

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
    historyService.add(this.routeId, this.metaTitle)
  }
}
</script>

<i18n>
{
  "en": {
    "sharedALink": "A link was shared with you",
    "sharedMultipleLinks": "Multiple links have been shared with you",
    "and": "and",
    "otherLinks": "other link(s) were shared with you"
  },
  "fr": {
    "sharedALink": "Un lien a été partagé avec vous",
    "sharedMultipleLinks": "Plusieurs liens ont été partagés avec vous",
    "and": "et",
    "otherLinks": "d'autres liens ont été partagés avec vous"
  },
  "es": {
    "sharedALink": "Un enlace fue compartido contigo",
    "sharedMultipleLinks": "Se han compartido múltiples enlaces contigo",
    "and": "y",
    "otherLinks": "otros enlaces fueron compartidos contigo"
  }
}
</i18n>
