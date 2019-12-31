<template>
  <section class="history">
    <div v-show="!show" class="history-link animated slideInUp" title="View history">
      <div @click="toggle" class="button with-hover">
        <c-icon icon="chevron-up" />
      </div>
    </div>

    <div v-show="show" class="history-link animated slideInDown" title="View history">
      <div @click="toggle" class="button with-hover">
        <c-icon icon="times" />
      </div>
    </div>

    <div v-show="show" class="history-content animated slideInUp">
      <h1>Your history</h1>
      <div v-if="items">
        <p class="mb-l">
          These are the links you have generated or visited recently
        </p>
        <history-item v-for="(item, index) in items" :key="index" :shortcut="item" />
      </div>
      <p v-else class="mb-l">
        When you have created or visited a link, we will show you a list of them here
      </p>
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
    this.items = storageService.getHistory().reverse().slice(0, 5)
  }
}
</script>

<style scoped lang="scss">
  section.history {
    padding: 0 10px;
  }
</style>
