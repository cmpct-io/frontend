<template>
  <div v-show="displayedPanel === 'target'" class="animated fadeIn">
    <h1 v-text="$t('title')" />
    <p v-text="$t('description')" class="mb-l" />

    <a :href="target" class="box with-hover break-word">
      <route-favicon :target="target" />
      <p v-text="target" class="text-small" />
      <c-icon icon="chevron-right" class="hidden-mobile" />
    </a>

    <p v-show="reports.length > 0" class="text-warning animated fadeInDown">
      <c-icon icon="exclamation-circle" class="fa-fw mr-s" />
      <span v-text="$t('reportWarning')" />
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import routeFavicon from '@/components/routes/route-favicon.vue'

export default {
  components: {
    routeFavicon
  },
  computed: {
    ...mapState('landing', [
      'displayedPanel',
      'target'
    ]),
    ...mapState('reports', [
      'reports'
    ])
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
