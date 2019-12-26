<template>
  <section class="history">
    <div v-show="!show" @click="toggle" class="drawer animated slideInUp">
      <p>
        <font-awesome-icon icon="bell" class="mr" />
        <span class="mr">Reports</span>
      </p>
    </div>

    <div v-show="show" class="history-link animated slideInDown" title="View history">
      <div @click="toggle" class="button with-hover">
        <font-awesome-icon icon="times" />
      </div>
    </div>

    <div v-show="show" class="history-content animated slideInUp">
      <h1>Reports</h1>
      <p>Here you can see reports made by other users, or report the link yourself</p>
    </div>
  </section>
</template>

<script>
import storageService from '@/services/storage-service.js'
import showMixin from '@/mixins/show-mixin.vue'

export default {
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
    display: inline-block;
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
