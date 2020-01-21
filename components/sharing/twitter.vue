<template>
  <a
    :href="shareUrl"
    :title="$t('hoverText')"
    class="social-button"
    onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');return false;"
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
