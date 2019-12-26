<template>
  <section class="history">
    <div v-show="!show" class="history-link animated slideInUp" title="View history">
      <div @click="toggle" class="button with-hover">
        <font-awesome-icon icon="chevron-up" />
      </div>
    </div>

    <div v-show="show" class="history-link animated slideInDown" title="View history">
      <div @click="toggle" class="button with-hover">
        <font-awesome-icon icon="times" />
      </div>
    </div>

    <div v-show="show" class="history-content animated slideInUp">
      <h1>Your history</h1>
      <p>These are the links you have generated or visited recently</p>
      <history-item v-for="(item, index) in items" :key="index" :shortcut="item" />
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
    this.items = storageService.getHistory()
  }
}
</script>

<style scoped lang="scss">
  section.history {
    padding: 0 10px;
  }

  .history-link {
    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;

    .button {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 1px solid white;
      font-size: 1rem;
      cursor: pointer;
      margin: 0 auto;
      border-radius: 50%;

        svg {
          margin-top: 13px;
        }
    }
  }
</style>
