<template>
  <section class="history">
    <div v-show="!show" :title="$t('viewHistory')" class="history-link animated slideInUp">
      <div @click="toggle" class="button with-hover">
        <c-icon icon="chevron-up" />
      </div>
    </div>

    <div v-show="show" class="history-link animated slideInDown">
      <div @click="toggle" class="button with-hover">
        <c-icon icon="times" />
      </div>
    </div>

    <div v-show="show" class="history-content animated slideInUp">
      <h1 v-text="$t('title')" />
      <div v-if="items.length > 0">
        <p v-text="$t('description')" class="mb-l" />
        <history-item v-for="(item, index) in items" :key="index" :shortcut="item" />
      </div>
      <p v-else v-text="$t('zeroItemDescription')" class="mb-l" />
    </div>
  </section>
</template>

<script>
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
  }
}
</script>

<style scoped lang="scss">
  section.history {
    padding: 0 10px;
  }
</style>

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
  }
}
</i18n>
