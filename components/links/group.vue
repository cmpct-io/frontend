<template>
  <div v-show="displayedPanel === 'target'" class="a-fadeIn">
    <h1
      v-text="$t('title')" />
    <p
      v-show="processDate"
      v-text="$t('description')"
      class="mb-l" />

    <links-reloader />

    <div class="c-group-wrapper u-noScroll">
      <links-link
        v-for="(link, index) in links"
        v-bind:key="index"
        v-bind="link"
        :new-page="links.length > 1" />
    </div>

    <links-warning />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('activeRoute', [
    'displayedPanel',
    'links',
    'processDate'
  ])
}
</script>

<style scoped>
.c-group-wrapper {
  margin-bottom: 20px;
  max-height: 55vh;
}
</style>

<i18n>
{
  "en": {
    "title": "Ready to jump?",
    "description": "This page contains links to other pages you might be interested in."
  },
  "fr": {
    "title": "Prêt à sauter?",
    "description": "Cette page contient des liens vers d'autres pages qui pourraient vous intéresser."
  },
  "es": {
    "title": "Listo para saltar?",
    "description": "Esta página contiene enlaces a otras páginas que pueden interesarle."
  }
}
</i18n>
