<template>
  <div>
    <p v-text="$t('title')" class="mb-m" />
    <div class="u-flex-container">
      <p @click="changeUIMode(true)" class="ui-option u-hover">
        <c-icon
          icon="moon"
          class="fa-fw mr" />
        <span
          v-text="$t('dark')" />
      </p>
      <p @click="changeUIMode(false)" class="ui-option u-hover">
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
import { mapState, mapActions } from 'vuex'
import { TRACK_EVENT } from '@/services/analytics-service.js'

export default {
  computed: mapState('theme', [
    'isDarkMode'
  ]),

  methods: {
    ...mapActions('theme', [
      'setTheme'
    ]),

    changeUIMode (isDarkMode) {
      const uiMode = isDarkMode === true
        ? 'dark'
        : 'light'

      TRACK_EVENT(this, `feature/theme/switched/${uiMode}`)

      this.$cookies.set('ui-mode', uiMode, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })

      this.setTheme(isDarkMode)
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
