<template>
  <div class="c-sharing-wrapper">
    <a href="#" class="mr" @click.prevent="toggle">
      <c-icon icon="share-alt" class="mr-s" />
      <span v-text="$t('share')" />
    </a>

    <shared-panel v-if="show">
      <div class="u-flex-container">
        <p
          class="mb-m u-flex-grow"
          v-text="$t('title')" />
        <c-icon
          icon="times"
          class="fa-fw u-pointer"
          @click="toggle" />
      </div>

      <div @click="toggle">
        <sharing-twitter :page-url="pageUrl" class="mb" />
        <sharing-facebook :page-url="pageUrl" class="mb" />
        <sharing-copy-address :page-url="pageUrl" />
      </div>
    </shared-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      pageUrl: ''
    }
  },

  watch: {
    $route (to, from) {
      this.show = false
      this.setPageUrl()
    }
  },

  created () {
    this.setPageUrl()
  },

  methods: {
    setPageUrl () {
      this.pageUrl = `https://cmpct.io${this.$router.currentRoute.fullPath}`
    },

    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
  .c-sharing-wrapper {
    display: inline-block;
    position: relative;
  }
</style>

<i18n>
{
  "en": {
    "share": "Share",
    "title": "Share this page"
  },
  "fr": {
    "share": "Partager",
    "title": "Partagez cette page"
  },
  "es": {
    "share": "Compartir",
    "title": "Comparte esta página"
  }
}
</i18n>
