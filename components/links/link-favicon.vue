<template>
  <div class="favicon u-hidden-mobile">
    <img
      v-show="faviconUrl && !hasImageError"
      :src="faviconUrl"
      :alt="$t('altText')"
      @error="hasImageError = true"
      class="bounceIn">
    <c-icon
      v-show="hasImageError"
      icon="globe"
      class="fadeIn" />
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
      hasImageError: false
    }
  },

  created () {
    try {
      const { protocol, hostname } = new URL(this.target)
      this.faviconUrl = `${protocol}//${hostname}/favicon.ico`
    } catch {
      this.hasImageError = true
      this.faviconUrl = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .favicon img, .favicon svg {
    margin: 0;
    margin-left: 15px;
    padding: 5px;
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 42px;
    min-width: 42px;
    height: 42px;

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
