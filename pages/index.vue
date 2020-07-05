<template>
  <slide-wrapper>
    <template v-slot:one>
      <generator-slide />
    </template>

    <template v-slot:two>
      <h2>What is cmpct.io?</h2>
    </template>
  </slide-wrapper>
</template>

<script>
import { mapMutations } from 'vuex'
import { GENERATOR_RESET } from '@/store/mutations.constants'

export default {
  head () {
    return {
      title: this.$t('pageTitle'),
      meta: [
        { property: 'og:url', name: 'og:url', hid: 'og:url', content: `https://cmpct.io/` }
      ]
    }
  },

  beforeDestroy () {
    this.GENERATOR_RESET()
  },

  methods: mapMutations('generator', [
    GENERATOR_RESET
  ])
}
</script>

<i18n>
{
  "en": {
    "pageTitle": "cmpct.io | Free Custom URL Shortener for Safer, Shorter Links"
  },
  "fr": {
    "pageTitle": "cmpct.io | Raccourcisseur d'URL personnalisé gratuit pour des liens plus sûrs et plus courts"
  },
  "es": {
    "pageTitle": "cmpct.io | Acortador de URL personalizado gratuito para enlaces más seguros y cortos"
  }
}
</i18n>
