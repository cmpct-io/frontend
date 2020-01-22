<template>
  <a :href="target" class="box with-hover break-word">
    <link-favicon :target="target" />
    <p v-text="target" class="text-small" />
    <c-icon icon="chevron-right" class="hidden-mobile" />
  </a>
</template>

<script>
import linkFavicon from '@/components/links/link-favicon.vue'

export default {
  components: {
    linkFavicon
  },
  props: {
    target: {
      type: String,
      required: true
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
