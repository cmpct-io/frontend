<template>
  <div>
    <div v-show="show" class="fadeIn">
      <h1 v-text="$t('title')" />
      <p
        v-text="$t('subtitle')"
        class="mb" />
      <p
        v-text="$t('message')"
        class="mb-l" />

      <generator />
      <group-wrapper />
    </div>

    <history v-on:toggled="toggle" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import showMixin from '@/mixins/show-mixin.vue'
import generator from '@/components/generator/generator.vue'
import groupWrapper from '@/components/generator/group-wrapper.vue'
import history from '@/components/history/history.vue'

export default {
  head () {
    return {
      title: this.$t('pageTitle')
    }
  },

  components: {
    generator,
    groupWrapper,
    history
  },

  mixins: [showMixin],

  computed: mapState('generator', [
    'links'
  ]),

  created () {
    this.show = true
    this.reset()
  },

  methods: mapActions('generator', [
    'reset'
  ])
}
</script>

<i18n>
{
  "en": {
    "pageTitle": "cmpct.io | Free Custom URL Shortener for Safer, Shorter Links",
    "title": "Custom URL Shortener",
    "subtitle": "Create free shorter and safer links you can share.",
    "message": "Paste your link into the box below to get started."
  },
  "fr": {
    "pageTitle": "cmpct.io | Raccourcisseur d'URL personnalisé gratuit pour des liens plus sûrs et plus courts",
    "title": "Commencer",
    "subtitle": "Créez gratuitement des liens plus courts et plus sûrs que vous pouvez partager.",
    "message": "Collez votre lien dans la case ci-dessous pour commencer."
  },
  "es": {
    "pageTitle": "cmpct.io | Acortador de URL personalizado gratuito para enlaces más seguros y cortos",
    "title": "Empezar",
    "subtitle": "Cree enlaces gratuitos más cortos y seguros que pueda compartir.",
    "message": "Pegue su enlace en el cuadro a continuación para comenzar."
  }
}
</i18n>
