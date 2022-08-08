<template>
  <div>
    <p class="mb-m" v-text="$t('title')" />
    <div class="u-flex-container">
      <p class="ui-option u-hover" @click="changeUIMode(true)">
        <c-icon
          icon="moon"
          class="fa-fw mr" />
        <span
          v-text="$t('dark')" />
      </p>
      <p class="ui-option u-hover" @click="changeUIMode(false)">
        <c-icon
          icon="lightbulb"
          class="fa-fw mr" />
        <span
          v-text="$t('light')" />
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { THEME_SET_THEME } from '@/store/mutations.constants'

export default {
  computed: mapState('theme', [
    'isDarkMode'
  ]),

  methods: {
    ...mapMutations('theme', [
      THEME_SET_THEME
    ]),

    changeUIMode (isDarkMode) {
      const uiMode = isDarkMode === true
        ? 'dark'
        : 'light'

      this.$cookies.set('ui-mode', uiMode, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })

      this.THEME_SET_THEME(isDarkMode)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .ui-option {
    border: 1px solid transparent;
    margin-right: 5px;
    padding: 5px;
  }
</style>

<i18n>
{
  "en": {
    "title": "Choose a theme",
    "dark": "Dark",
    "light": "Light"
  },
  "fr": {
    "title": "Choisissez un thème",
    "dark": "Foncé",
    "light": "Lumière"
  },
  "es": {
    "title": "Elige un tema",
    "dark": "Oscuro",
    "light": "Ligero"
  }
}
</i18n>
