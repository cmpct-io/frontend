<template>
  <p
    v-show="showValidationWarning"
    class="u-text-warning a-fadeInDown mb-l">
    <c-icon
      icon="exclamation-circle"
      class="fa-fw mr-s" />

    <span
      v-text="$t('enterValidAddress')" />
  </p>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('generator', [
    'showValidationWarning'
  ])
}
</script>

<i18n>
{
  "en": {
    "enterValidAddress": "Please enter a valid website address"
  },
  "fr": {
    "enterValidAddress": "Veuillez entrer une adresse de site Web valide"
  },
  "es": {
    "enterValidAddress": "Por favor, introduzca una dirección de sitio web válida"
  }
}
</i18n>
