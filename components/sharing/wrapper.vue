<template>
  <twitter v-bind="shareProperties" />
</template>

<script>
import twitter from '@/components/sharing/twitter.vue'

export default {
  components: {
    twitter
  },
  data () {
    return {
      shareProperties: {
        pageUrl: ''
      }
    }
  },
  created () {
    this.shareProperties.pageUrl = `https://cmpct.io${this.$router.currentRoute.fullPath}`
  }
}
</script>
