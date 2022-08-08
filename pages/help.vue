<template>
  <section class="c-help u-noScroll">
    <h1
      class="mb-l"
      v-text="$t('pageTitle')" />

    <help-what />
    <help-privacy />
    <help-price />
    <help-safety />
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: `cmpct.io | ${this.$t('pageTitle')}`,
      meta: [
        { property: 'og:url', name: 'og:url', hid: 'og:url', content: 'https://cmpct.io/help/' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .c-help {
    position: fixed;
    top: 85px;
    width: 100%;
    bottom: 0;
    padding: 10px;
    text-align: center;
  }

  .help-section {
    display: block;
    margin: 0 auto;
    width: 60%;
    padding: 10px;
    max-width: 650px;

    @media (max-width: 768px) {
      width: 100%;
    }

    h4 {
      margin-bottom: 10px;
    }
  }
</style>

<i18n>
{
  "en": {
    "pageTitle": "Help"
  },
  "fr": {
    "pageTitle": "Aidez-moi"
  },
  "es": {
    "pageTitle": "Ayuda"
  }
}
</i18n>
