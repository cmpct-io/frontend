<template>
  <div v-show="displayedPanel === 'target'" class="animated fadeIn">
    <h1 v-text="$t('title')" />
    <p v-text="$t('description')" class="mb-l" />

    <render-link
      v-for="(link, index) in links"
      v-bind:key="index"
      v-bind="link" />

    <p v-show="reports.length > 0" class="text-warning animated fadeInDown">
      <c-icon icon="exclamation-circle" class="fa-fw mr-s" />
      <span v-text="$t('reportWarning')" />
    </p>

    <share-wrapper v-if="showSharePanel" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import renderLink from '@/components/links/link.vue'
import shareWrapper from '@/components/sharing/wrapper.vue'

export default {
  components: {
    renderLink,
    shareWrapper
  },
  computed: {
    ...mapState('landing', [
      'displayedPanel',
      'links'
    ]),
    ...mapState('reports', [
      'reports'
    ]),
    showSharePanel () {
      return (this.$cookies.get('exp-share') === 'enabled')
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Ready to jump?",
    "description": "This page is a redirect for another website, click the link below if you want to visit it.",
    "reportWarning": "Warning: somebody recently reported this link"
  },
  "fr": {
    "title": "Prêt à sauter?",
    "description": "Cette page est une redirection vers un autre site Web, cliquez sur le lien ci-dessous si vous souhaitez le visiter.",
    "reportWarning": "Avertissement: quelqu'un a récemment signalé ce lien"
  },
  "es": {
    "title": "Listo para saltar?",
    "description": "Esta página es una redirección a otro sitio web, haga clic en el enlace a continuación si desea visitarla.",
    "reportWarning": "Advertencia: alguien informó recientemente este enlace"
  }
}
</i18n>
