<template>
  <div @click="$emit('selected', locale)" class="option flex-container with-hover">
    <img
      :src="imageSource"
      class="flag">
    <p
      v-text="name"
      class="flex-grow" />
  </div>
</template>

<script>
export default {
  props: {
    locale: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'English'
    }
  },
  computed: {
    imageSource () {
      return `/flags/${this.locale}.png`
    }
  }
}
</script>

<style scoped>
  .option {
    padding: 5px;
    border: 1px solid transparent;
  }

  img.flag {
    height: 35px;
    margin-right: 20px;
    margin-left: 0;
  }
</style>
