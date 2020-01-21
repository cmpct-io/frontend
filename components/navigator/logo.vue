<template>
  <nuxt-link to="/" class="logo">
    <img :src="largeImageSource" class="large" alt="logo">
    <img :src="smallImageSource" class="small" alt="logo">
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('background', [
      'isDarkMode'
    ]),
    largeImageSource () {
      return this.isDarkMode
        ? '/logo.png'
        : '/logo--light.png'
    },
    smallImageSource () {
      return this.isDarkMode
        ? '/logo-square.png'
        : '/logo-square--light.png'
    }
  }
}
</script>

<style scoped lang="scss">
  .logo {
    float: left;
    font-size: 35px;
    color: white;
    text-decoration: none;
    user-select: none;

    .light & {
      color: black;
    }

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
  }
</style>
