<template>
  <section class="navigator">
    <logo />

    <div class="links">
      <sharing-wrapper />

      <a href="https://github.com/tommcclean/cmpct.io" target="blank" class="hidden-mobile mr">
        <c-icon icon="code" class="mr-s" />
        <span v-text="$t('github')" />
      </a>

      <router-link to="help" class="mr">
        <c-icon icon="question" class="mr-s" />
        <span v-text="$t('help')" />
      </router-link>

      <language-switcher />
    </div>
  </section>
</template>

<script>
import logo from '@/components/navigator/logo.vue'
import languageSwitcher from '@/components/navigator/language-switcher.vue'
import sharingWrapper from '@/components/sharing/wrapper.vue'

export default {
  components: {
    logo,
    sharingWrapper,
    languageSwitcher
  }
}
</script>

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
