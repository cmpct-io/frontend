<template>
  <div @click="$emit('selected', locale)" class="option flex-container with-hover">
    <img
      :src="imageSource"
      class="flag"
      alt="Flag">
    <p
      v-text="name"
      class="flex-grow" />
  </div>
</template>

<script>
import { ASSET_PATH } from '@/services/configuration-service.js'

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
      return ASSET_PATH(`/flags/${this.locale}.png`)
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
