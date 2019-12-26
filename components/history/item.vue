<template>
  <nuxt-link :to="shortcut" class="item flex-container with-hover">
    <font-awesome-icon icon="link" />
    <p v-text="qualifiedShortcut" class="flex-grow" />
    <font-awesome-icon icon="chevron-right" class="arrow" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    shortcut: {
      type: String,
      required: true
    }
  },
  computed: {
    qualifiedShortcut () {
      return `cmpct.io/${this.shortcut}`
    }
  }
}
</script>

<style scoped lang="scss">
  .item {
    border: 1px solid white;
    padding: 15px;
    border-radius: 5px;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: left;
    cursor: pointer;

    svg {
      margin-right: 10px;
      transition: all 0.2s ease-in-out;
    }

    p {
      margin-bottom: 0;
    }

    &:hover {
      svg.arrow {
        margin-right: 0;
      }
    }
  }
</style>
