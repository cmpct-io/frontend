<template>
  <p
    v-show="hasReports"
    class="u-text-warning a-fadeInDown">
    <c-icon
      icon="exclamation-circle"
      class="fa-fw mr-s" />

    <span
      v-text="$t('reportWarning')" />
  </p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('reports', [
    'hasReports'
  ])
}
</script>

<i18n>
{
  "en": {
    "reportWarning": "Warning: somebody recently reported the links on this page."
  },
  "fr": {
    "reportWarning": "Avertissement: quelqu'un a récemment signalé les liens sur cette page."
  },
  "es": {
    "reportWarning": "Advertencia: alguien informó recientemente los enlaces en esta página."
  }
}
</i18n>
