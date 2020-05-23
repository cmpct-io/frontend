<template>
  <section v-show="items.length > 0" class="c-history">
    <history-trigger />
    <circle-button v-show="show" @clicked="hideHistory" icon="times" />

    <div v-show="show" class="c-history-content a-slideInUp">
      <h1 v-text="$t('history')" />
      <p v-text="$t('description')" class="mb-l" />

      <div class="c-history-items u-noScroll">
        <history-item
          v-for="(item, index) in items"
          :key="index"
          v-bind="item" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import historyTrigger from '@/components/history/trigger.vue'
import historyItem from '@/components/history/item.vue'

export default {
  components: {
    historyTrigger,
    historyItem
  },

  computed: mapState('history', [
    'items',
    'show'
  ]),

  mounted () {
    this.initialise()
  },

  methods: mapActions('history', [
    'hideHistory',
    'initialise'
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
    "description": "These are the links you have created or visited recently"
  },
  "fr": {
    "history": "Histoire",
    "description": "Ce sont les liens que vous avez générés ou visités récemment"
  },
  "es": {
    "history": "Historia",
    "description": "Estos son los enlaces que ha generado o visitado recientemente."
  }
}
</i18n>
