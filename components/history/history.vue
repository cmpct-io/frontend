<template>
  <section class="c-history">
    <tabs v-show="!show">
      <div
        :title="$t('viewHistory')"
        @click="toggle"
        class="tab u-border u-hover a-slideInUp">
        <c-icon icon="history" class="mr-s" />
        <span v-text="$t('history')" />
      </div>
    </tabs>

    <div v-show="show" class="c-history-content a-slideInUp">
      <h1 v-text="$t('history')" />
      <div v-if="items.length > 0">
        <p v-text="$t('description')" class="mb-l" />
        <div class="c-history-items u-noScroll">
          <history-item
            v-for="(item, index) in items"
            :key="index"
            v-bind="item" />
        </div>
      </div>
      <p
        v-else
        v-text="$t('zeroItemDescription')"
        class="mb-l" />
    </div>

    <circle-button v-show="show" @clicked="toggle" icon="times" />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import circleButton from '@/components/shared/circle-button.vue'
import tabs from '@/components/shared/tabs.vue'
import historyItem from '@/components/history/item.vue'

export default {
  components: {
    tabs,
    historyItem,
    circleButton
  },

  computed: mapState('history', [
    'items',
    'show'
  ]),

  methods: mapActions('history', [
    'toggle'
  ])
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
    "history": "History",
    "description": "These are the links you have generated or visited recently",
    "zeroItemDescription": "When you have created or visited a link, we will show you a list of them here",
    "viewHistory": "View history"
  },
  "fr": {
    "history": "Histoire",
    "description": "Ce sont les liens que vous avez générés ou visités récemment",
    "zeroItemDescription": "Lorsque vous avez créé ou visité un lien, nous vous en montrerons une liste ici",
    "viewHistory": "Voir l'historique"
  },
  "es": {
    "history": "Historia",
    "description": "Estos son los enlaces que ha generado o visitado recientemente.",
    "zeroItemDescription": "Cuando haya creado o visitado un enlace, le mostraremos una lista de ellos aquí",
    "viewHistory": "Ver historial"
  }
}
</i18n>
