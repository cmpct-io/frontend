<template>
  <container>
    <div class="animated fadeIn">
      <h1>Not Found</h1>
      <p>Woops, the link you tried to use doesn't seem to exist, please double check that you used the correct link</p>
      <nuxt-link to="/" class="square-button with-hover">
        <c-icon icon="home" />
        <span>Visit Homepage</span>
      </nuxt-link>
    </div>
  </container>
</template>

<script>
import container from '@/components/layout/container.vue'

export default {
  components: {
    container
  }
}
</script>
