<template>
  <section>
    <h1
      v-text="$t('title')" />
    <p
      class="mb"
      v-text="$t('subtitle')" />
    <p
      class="mb-l"
      v-text="$t('message')" />

    <generator />
    <generator-group-wrapper />

    <shared-corner-button
      link-element="nuxt-link"
      icon-set="fas"
      icon="history"
      :is-right="false"
      link="/history"
      target=""
      title="History Page" />
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { GENERATOR_RESET } from '@/store/mutations.constants'

export default {
  head () {
    return {
      title: this.$t('pageTitle'),
      meta: [
        { property: 'og:url', name: 'og:url', hid: 'og:url', content: 'https://cmpct.io/' }
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
    "history": "History",
    "pageTitle": "cmpct.io | Create & share safer, shorter links",
    "title": "Create & share safer, shorter links",
    "subtitle": "Create free shorter and safer links you can share.",
    "message": "Paste your link into the box below to get started."
  },
  "fr": {
    "history": "Histoire",
    "pageTitle": "cmpct.io | Raccourcisseur d'URL personnalisé gratuit pour des liens plus sûrs et plus courts",
    "title": "Commencer",
    "subtitle": "Créez gratuitement des liens plus courts et plus sûrs que vous pouvez partager.",
    "message": "Collez votre lien dans la case ci-dessous pour commencer."
  },
  "es": {
    "history": "Historia",
    "pageTitle": "cmpct.io | Acortador de URL personalizado gratuito para enlaces más seguros y cortos",
    "title": "Empezar",
    "subtitle": "Cree enlaces gratuitos más cortos y seguros que pueda compartir.",
    "message": "Pegue su enlace en el cuadro a continuación para comenzar."
  }
}
</i18n>
