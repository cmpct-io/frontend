<template>
  <div class="sharing-wrapper">
    <a @click.prevent="toggle" href="#" class="mr">
      <c-icon icon="share-alt" class="mr-s" />
      <span v-text="$t('share')" />
    </a>

    <panel v-show="show">
      <div class="u-flex-container">
        <p
          v-text="$t('title')"
          class="mb-m u-flex-grow" />
        <c-icon
          @click="toggle"
          icon="times"
          class="fa-fw u-pointer" />
      </div>

      <twitter :page-url="pageUrl" />
      <facebook :page-url="pageUrl" />
    </panel>
  </div>
</template>

<script>
import { TRACK_EVENT } from '@/services/analytics-service.js'
import panel from '@/components/shared/panel.vue'
import twitter from '@/components/sharing/twitter.vue'
import facebook from '@/components/sharing/facebook.vue'

export default {
  components: {
    panel,
    twitter,
    facebook
  },

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

      if (this.show) {
        TRACK_EVENT(this, 'feature/sharing/expanded', `URL: ${this.pageUrl}`)
      }
    }
  }
}
</script>

<style scoped>
  .sharing-wrapper {
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
