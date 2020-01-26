<template>
  <nuxt-link to="/" class="logo">
    <img :src="largeImageSource" class="large" alt="logo">
    <img :src="smallImageSource" class="small" alt="logo">
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'
import { ASSET_PATH } from '@/services/configuration-service.js'

export default {
  computed: {
    ...mapState('background', [
      'isDarkMode'
    ]),
    largeImageSource () {
      return this.isDarkMode
        ? ASSET_PATH('/logo.png')
        : ASSET_PATH('/logo--light.png')
    },
    smallImageSource () {
      return this.isDarkMode
        ? ASSET_PATH('/logo-square.png')
        : ASSET_PATH('/logo-square--light.png')
    }
  }
}
</script>

<style scoped lang="scss">
  img {
    height: 50px;
  }

  img.small {
    display: none
  }

  @media (max-width: 768px) {
    img.large {
      display: none;
    }

    img.small {
      display: initial;
    }
  }
</style>
