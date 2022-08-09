<template>
  <section>
    <h1
      v-text="$t('title')" />
    <p
      class="mb-m"
      v-text="$t('subtitle')" />
    <p
      class="mb-l"
      v-text="$t('message')" />

    <generator />
    <generator-group-wrapper />

    <shared-corner-button
      v-if="items.length > 0"
      link-element="nuxt-link"
      icon-set="fas"
      icon="history"
      :is-right="false"
      link="/history"
      target=""
      :title="$t('history')" />

    <shared-corner-button
      icon-set="fab"
      icon="github"
      link="https://github.com/cmpct-io"
      target="_blank"
      title="Github Repo" />
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
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

  computed: mapState('history', [
    'items'
  ]),

  beforeDestroy () {
    this.GENERATOR_RESET()
  },

  mounted () {
    this.initialise()
  },

  methods: {
    ...mapMutations('generator', [
      GENERATOR_RESET
    ]),

    ...mapActions('history', [
      'initialise'
    ])
  }
}
</script>

<i18n>
{
  "en": {
    "history": "History",
    "pageTitle": "cmpct.io | Create & share safer, shorter links",
    "title": "Create & share safer, shorter links",
    "subtitle": "Paste your link into the box below to get started.",
    "message": "Hit the list to group more than one website in a single short URL"
  },
  "fr": {
    "history": "Histoire",
    "pageTitle": "cmpct.io | Raccourcisseur d'URL personnalisé gratuit pour des liens plus sûrs et plus courts",
    "title": "Créez et partagez des liens plus courts et plus sûrs",
    "subtitle": "Collez votre lien dans la case ci-dessous pour commencer.",
    "message": "Appuyez sur la liste pour regrouper plusieurs sites Web dans une seule URL courte."
  },
  "es": {
    "history": "Historia",
    "pageTitle": "cmpct.io | Acortador de URL personalizado gratuito para enlaces más seguros y cortos",
    "title": "Crea y comparte enlaces más cortos y seguros",
    "subtitle": "Pegue su enlace en el cuadro a continuación para comenzar.",
    "message": "Haga clic en la lista para agrupar más de un sitio web en una sola URL corta."
  }
}
</i18n>
