<template>
  <div v-show="displayedPanel === 'target'" class="fadeIn">
    <h1 v-text="$t('title')" />
    <p
      v-show="processDate"
      v-text="$t('description')"
      class="mb-l" />
    <reloader
      v-if="!processDate"
      class="mb-l" />

    <div class="group-wrapper">
      <render-link
        v-for="(link, index) in links"
        v-bind:key="index"
        v-bind="link"
        :new-page="links.length > 1" />
    </div>

    <report-warning v-show="reports.length > 0" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import historyService from '@/services/history-service.js'
import reloader from '@/components/links/reloader.vue'
import renderLink from '@/components/links/link.vue'
import reportWarning from '@/components/links/warning.vue'

export default {
  components: {
    reloader,
    renderLink,
    reportWarning
  },

  computed: {
    ...mapState('landing', [
      'routeId',
      'displayedPanel',
      'links',
      'processDate'
    ]),

    ...mapState('reports', [
      'reports'
    ]),

    metaTitle () {
      return this.links.length > 1
        ? this.multipleLinksMetaTitle
        : this.links[0].title || this.$t('sharedALink')
    }
  },

  watch: {
    processDate () {
      historyService.add(this.routeId, this.metaTitle)
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Ready to jump?",
    "description": "This page contains links to other pages you might be interested in.",
    "sharedALink": "A link was shared with you"
  },
  "fr": {
    "title": "Prêt à sauter?",
    "description": "Cette page contient des liens vers d'autres pages qui pourraient vous intéresser.",
    "sharedALink": "Un lien a été partagé avec vous"
  },
  "es": {
    "title": "Listo para saltar?",
    "description": "Esta página contiene enlaces a otras páginas que pueden interesarle.",
    "sharedALink": "Un enlace fue compartido contigo"
  }
}
</i18n>

<style scoped>
.group-wrapper {
  margin-bottom: 20px;
  max-height: 55vh;
  overflow: auto;
}

.group-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
