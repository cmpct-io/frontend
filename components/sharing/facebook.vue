<template>
  <a
    :href="hrefAttribute"
    :onclick="onClickAttribute"
    :title="$t('hoverText')"
    class="social-button"
    target="_blank">
    <c-icon :icon="['fab', 'facebook-square']" />
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
    },
    onClickAttribute () {
      return `javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');return false;`
    }
  }
}
</script>

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
