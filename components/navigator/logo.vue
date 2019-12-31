<template>
  <nuxt-link to="/" class="logo">
    <img class="large" src="/logo.png">
    <img class="small" src="/logo-square.png">
  </nuxt-link>
</template>

<style scoped lang="scss">
  .logo {
    float: left;
    font-size: 35px;
    color: white;
    text-decoration: none;
    user-select: none;

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
