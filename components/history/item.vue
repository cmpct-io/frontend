<template>
  <nuxt-link
    :to="shortcut"
    class="item flex-container with-hover with-border">
    <c-icon icon="link" />
    <p
      v-text="qualifiedShortcut"
      class="flex-grow" />
    <c-icon
      icon="chevron-right"
      class="arrow" />
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
    padding: 15px;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: left;
    cursor: pointer;

    svg {
      margin-right: 10px;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      svg.arrow {
        margin-right: 0;
      }
    }
  }
</style>
