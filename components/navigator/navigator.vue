<template>
  <section class="navigator">
    <navigator-logo />

    <div class="links">
      <sharing-share-panel />

      <router-link to="help" class="mr-l">
        <c-icon icon="question" class="mr-s" />
        <span v-text="$t('help')" />
      </router-link>

      <navigator-language-switcher />
    </div>
  </section>
</template>

<style scoped lang="scss">
  section.navigator {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 30px;
    z-index: 51;
    user-select: none;

    .links {
      float: right;
      padding: 10px;
    }
  }
</style>

<i18n>
{
  "en": {
    "github": "Github",
    "help": "Help"
  },
  "fr": {
    "github": "Github",
    "help": "Aidez-moi"
  },
  "es": {
    "github": "Github",
    "help": "Ayuda"
  }
}
</i18n>
