<template>
  <section class="c-history">
    <div class="c-history-content">
      <h1
        v-text="$t('history')" />
      <p
        v-text="$t('description')"
        class="mb-l" />

      <div class="c-history-items u-noScroll">
        <history-item
          v-for="(item, index) in items"
          :key="index"
          v-bind="item" />
      </div>
    </div>

    <nuxt-link to="/">
      <shared-circle-button icon="times" />
    </nuxt-link>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  head () {
    return {
      title: this.$t('pageTitle'),
      meta: [
        { property: 'og:url', name: 'og:url', hid: 'og:url', content: `https://cmpct.io/history/` }
      ]
    }
  },

  computed: mapState('history', [
    'items'
  ]),

  mounted () {
    this.initialise()
  },

  methods: {
    ...mapActions('history', [
      'initialise'
    ])
  }
}
</script>

<style scoped>
  .c-history-items {
    max-height: 65vh;
  }
</style>

<i18n>
{
  "en": {
    "pageTitle": "cmpct.io | History",
    "history": "History",
    "description": "These are the links you have created or visited recently"
  },
  "fr": {
    "pageTitle": "cmpct.io | Histoire",
    "history": "Histoire",
    "description": "Ce sont les liens que vous avez générés ou visités récemment"
  },
  "es": {
    "pageTitle": "cmpct.io | Historia",
    "history": "Historia",
    "description": "Estos son los enlaces que ha generado o visitado recientemente."
  }
}
</i18n>
