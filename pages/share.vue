<template>
  <container>
    <h1>Your link is ready!</h1>
    <p>You can share this link with your friends and colleagues now</p>
    <share-link :link="shareUrl" />

    <button @click="TestLink" class="secondary">
      <font-awesome-icon icon="link" />
      <span>Try it out</span>
    </button>
    <button @click="GoHome">
      <font-awesome-icon icon="plus" />
      <span>Create another link?</span>
    </button>
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
  },
  methods: {
    GoHome () {
      this.$router.push({ name: 'index' })
    },
    TestLink () {

    }
  }
}
</script>

<style scoped lang="scss">
button {
  background-color: #660066;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  margin: 5px;

  &.secondary {
    background-color: #BA8B00;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
