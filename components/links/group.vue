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
    "description": "This page contains links to other pages you might be interested in.",
    "reportWarning": "Warning: somebody recently reported the links on this page."
  },
  "fr": {
    "title": "Prêt à sauter?",
    "description": "Cette page contient des liens vers d'autres pages qui pourraient vous intéresser.",
    "reportWarning": "Avertissement: quelqu'un a récemment signalé les liens sur cette page."
  },
  "es": {
    "title": "Listo para saltar?",
    "description": "Esta página contiene enlaces a otras páginas que pueden interesarle.",
    "reportWarning": "Advertencia: alguien informó recientemente los enlaces en esta página."
  }
}
</i18n>
