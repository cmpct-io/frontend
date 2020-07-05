<template>
  <nuxt-link
    :title="$t('history')"
    to="history"
    class="tab u-border u-hover a-slideInUp">
    <c-icon
      icon="chevron-down"
      class="mr-s" />

    <span
      v-text="$t('learnMore')" />
  </nuxt-link>
</template>

<i18n>
{
  "en": {
    "learnMore": "Learn More"
  },
  "fr": {
    "learnMore": "Learn More"
  },
  "es": {
    "learnMore": "Learn More"
  }
}
</i18n>
