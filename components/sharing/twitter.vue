<template>
  <a
    :href="shareUrl"
    :title="$t('hoverText')"
    class="social-button"
    target="blank"
    data-size="large">
    <c-icon :icon="['fab', 'twitter-square']" />
  </a>
</template>

<script>
export default {
  props: {
    pageUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    shareUrl () {
      return `https://twitter.com/intent/tweet?text=${this.pageUrl}`
    }
  }
}
</script>

<style scoped>
.social-button {
  font-size: 2rem;
}
</style>

<i18n>
{
  "en": {
    "hoverText": "Share on Twitter..."
  },
  "fr": {
    "hoverText": "Partager sur Twitter..."
  },
  "es": {
    "hoverText": "Compartir en Twitter..."
  }
}
</i18n>
