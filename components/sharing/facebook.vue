<template>
  <a
    :href="hrefAttribute"
    :title="$t('hoverText')"
    onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');return false;"
    class="u-flex-container"
    rel="noopener"
    target="_blank">
    <c-icon
      :icon="['fab', 'facebook-square']"
      class="social-button mr" />
    <span
      v-text="$t('hoverText')"
      class="u-text-small" />
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
    hrefAttribute () {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.pageUrl}&t=${this.pageUrl}`
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
    "hoverText": "Share on Facebook..."
  },
  "fr": {
    "hoverText": "Partager sur Facebook..."
  },
  "es": {
    "hoverText": "Compartir en Facebook..."
  }
}
</i18n>
