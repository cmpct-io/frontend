<template>
  <div>
    <nuxt-link
      :to="shortcut"
      class="c-item u-flex-container u-hover u-border">
      <p class="u-flex-grow" v-text="title" />

      <div class="c-item-clear" @click.prevent="deleteItem">
        <c-icon
          icon="trash" />
      </div>
      <c-icon
        icon="chevron-right"
        class="arrow" />
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import historyService from '@/services/history-service.js'

export default {
  props: {
    shortcut: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    qualifiedShortcut () {
      return `cmpct.io/${this.shortcut}`
    }
  },

  methods: {
    ...mapActions('history', [
      'initialise'
    ]),

    deleteItem () {
      historyService.deleteItem(this.shortcut)
      this.initialise()
    }
  }
}
</script>

<style scoped lang="scss">
  .c-item {
    padding: 10px 15px;
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: left;
    cursor: pointer;
  }

  .c-item-clear {
    margin: 0 10px;
    padding: 10px;
  }
</style>
