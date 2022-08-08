<template>
  <div class="option u-flex-container u-hover" @click="$emit('selected', locale)">
    <img
      :src="imageSource"
      class="flag"
      alt="Flag">
    <p
      class="u-flex-grow"
      v-text="name" />
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
