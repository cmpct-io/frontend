<template>
  <p class="text-warning animated fadeInDown mb-l">
    <c-icon
      icon="exclamation-circle"
      class="fa-fw mr-s" />
    <span
      v-text="$t('enterValidAddress')" />
  </p>
</template>

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
