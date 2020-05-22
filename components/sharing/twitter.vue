<template>
  <a
    :href="shareUrl"
    :title="$t('hoverText')"
    onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');return false;"
    class="u-flex-container"
    rel="noopener"
    target="_blank"
    data-size="large">
    <c-icon :icon="['fab', 'twitter-square']" class="social-button mr" />
    <span v-text="$t('hoverText')" class="u-text-small" />
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
  svg {
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
