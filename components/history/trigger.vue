<template>
  <tabs v-show="!show">
    <div
      :title="$t('viewHistory')"
      @click="openHistoryPanel"
      class="tab u-border u-hover a-slideInUp">
      <c-icon icon="history" class="mr-s" />
      <span v-text="$t('history')" />
    </div>
  </tabs>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { TRACK_EVENT } from '@/services/analytics-service.js'

export default {
  computed: mapState('history', [
    'show'
  ]),

  methods: {
    ...mapActions('history', [
      'showHistory'
    ]),

    openHistoryPanel () {
      TRACK_EVENT(this, 'feature/history/expanded')
      this.showHistory()
    }
  }
}
</script>

<i18n>
{
  "en": {
    "history": "History",
    "viewHistory": "View history"
  },
  "fr": {
    "history": "Histoire",
    "viewHistory": "Voir l'historique"
  },
  "es": {
    "history": "Historia",
    "viewHistory": "Ver historial"
  }
}
</i18n>
