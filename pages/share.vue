<template>
  <container>
    <h1>Your link is ready!</h1>
    <p>You can share this link with your friends and colleagues now</p>
    <share-link :link="shareUrl" />
  </container>
</template>

<script>
import container from '@/components/layout/container.vue'
import shareLink from '@/components/share/share-link.vue'

export default {
  components: {
    container,
    shareLink
  },
  computed: {
    shareUrl () {
      return this.$route.query.url
    }
  },
  mounted () {
    if (!this.shareUrl) {
      this.GoHome()
    }
  }
}
</script>
