<template>
  <shared-tabs>
    <nuxt-link
      :title="$t('history')"
      to="history"
      class="tab u-border u-hover a-slideInUp">
      <c-icon
        icon="history"
        class="mr-s" />

      <span
        v-text="$t('history')" />
    </nuxt-link>
  </shared-tabs>
</template>

<i18n>
{
  "en": {
    "history": "History"
  },
  "fr": {
    "history": "Histoire"
  },
  "es": {
    "history": "Historia"
  }
}
</i18n>
