<template>
  <div class="c-favicon u-hidden-mobile">
    <img
      v-show="faviconUrl && hasFavicon"
      :src="faviconUrl"
      :alt="$t('altText')"
      class="a-bounceIn"
      @error="hasFavicon = false">
    <c-icon
      v-show="!hasFavicon"
      icon="globe"
      class="a-fadeIn" />
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      faviconUrl: '',
      hasFavicon: true
    }
  },

  created () {
    try {
      const { protocol, hostname } = new URL(this.target)
      this.faviconUrl = `${protocol}//${hostname}/favicon.ico`
    } catch {
      this.hasFavicon = false
      this.faviconUrl = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .c-favicon img, .c-favicon svg {
    margin: 0;
    margin-left: 15px;
    padding: 5px;
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 42px;
    min-width: 42px;
    max-width: 42px;
    height: 42px;
    max-height: 42px;
    overflow: hidden;

    .light & {
      background-color: whitesmoke;
    }
  }
</style>

<i18n>
{
  "en": {
    "altText": "Website favicon"
  },
  "fr": {
    "altText": "Favicon du site"
  },
  "es": {
    "altText": "Sitio web favicon"
  }
}
</i18n>
