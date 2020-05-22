<script>
import { mapState } from 'vuex'
import { STORAGE_PATH } from '@/services/configuration-service.js'
import historyService from '@/services/history-service.js'

export default {

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
        ? `${STORAGE_PATH}/screenshots/${this.links[0].screenshotFileName}`
        : 'https://cdn.cmpct.io/_nuxt/icons/icon_512.d73a66.png'
    }
  },

  methods: {
    addHistory () {
      historyService.add(this.routeId, this.metaTitle)
    }
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
