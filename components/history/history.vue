<template>
  <section class="history">
    <div
      v-show="!show"
      :title="$t('viewHistory')"
      @click="toggleVisibility"
      class="circle-button with-hover animated slideInUp">
      <c-icon icon="chevron-up" />
    </div>

    <div
      v-show="show"
      @click="toggle"
      class="circle-button with-hover animated slideInDown">
      <c-icon icon="times" />
    </div>

    <div v-show="show" class="history-content animated slideInUp">
      <h1 v-text="$t('title')" />
      <div v-if="items.length > 0">
        <p v-text="$t('description')" class="mb-l" />
        <history-item
          v-for="(item, index) in items"
          :key="index"
          :shortcut="item" />
      </div>
      <p
        v-else
        v-text="$t('zeroItemDescription')"
        class="mb-l" />
    </div>
  </section>
</template>

<script>
import { TRACK_EVENT } from '@/services/analytics-service.js'
import storageService from '@/services/storage-service.js'
import showMixin from '@/mixins/show-mixin.vue'
import historyItem from '@/components/history/item.vue'

export default {
  components: {
    historyItem
  },

  mixins: [showMixin],

  data () {
    return {
      items: []
    }
  },

  mounted () {
    const items = storageService.getHistory()

    if (items) {
      this.items = items.reverse().slice(0, 5)
    }
  },

  methods: {
    toggleVisibility () {
      this.toggle()

      if (this.show) {
        TRACK_EVENT(this, 'feature/history/expanded')
      }
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Your history",
    "description": "These are the links you have generated or visited recently",
    "zeroItemDescription": "When you have created or visited a link, we will show you a list of them here",
    "viewHistory": "View history"
  },
  "fr": {
    "title": "Votre histoire",
    "description": "Ce sont les liens que vous avez générés ou visités récemment",
    "zeroItemDescription": "Lorsque vous avez créé ou visité un lien, nous vous en montrerons une liste ici",
    "viewHistory": "Voir l'historique"
  },
  "es": {
    "title": "Tu historia",
    "description": "Estos son los enlaces que ha generado o visitado recientemente.",
    "zeroItemDescription": "Cuando haya creado o visitado un enlace, le mostraremos una lista de ellos aquí",
    "viewHistory": "Ver historial"
  }
}
</i18n>
