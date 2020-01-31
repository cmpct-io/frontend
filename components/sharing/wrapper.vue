<template>
  <div>
    <twitter :page-url="pageUrl" />
    <facebook :page-url="pageUrl" />
  </div>
</template>

<script>
import twitter from '@/components/sharing/twitter.vue'
import facebook from '@/components/sharing/facebook.vue'

export default {
  components: {
    twitter,
    facebook
  },
  data () {
    return {
      pageUrl: ''
    }
  },
  created () {
    this.pageUrl = `https://cmpct.io${this.$router.currentRoute.fullPath}`
  }
}
</script>

<style scoped>
  .social-button {
    font-size: 2rem;
  }
</style>
