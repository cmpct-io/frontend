<template>
  <form
    @submit.prevent="addReport"
    class="u-standard-width a-fadeIn">
    <p
      v-text="$t('tellUsWhy')"
      class="mb-l" />
    <input
      v-model="name"
      :placeholder="$t('yourNamePlaceholder')"
      class="u-border mb-m"
      required>
    <select
      v-model="reportType"
      class="u-border mb-m">
      <option value="0">
        {{ $t('scam') }}
      </option>
      <option value="1">
        {{ $t('deadLink') }}
      </option>
      <option value="2">
        {{ $t('insecure') }}
      </option>
      <option value="3">
        {{ $t('phishing') }}
      </option>
    </select>

    <button
      v-text="$t('add')"
      class="u-hover"
      type="submit" />
    <button
      @click="setIsReporting(false)"
      v-text="$t('cancel')"
      class="u-hover"
      type="button" />
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { TRACK_EVENT } from '@/services/analytics-service.js'

export default {
  data () {
    return {
      name: '',
      reportType: 0
    }
  },

  computed: mapState('activeRoute', [
    'routeId'
  ]),

  methods: {
    ...mapActions('reports', [
      'submitReport',
      'loadReports',
      'setIsReporting'
    ]),

    async addReport () {
      TRACK_EVENT(this, 'feature/report/submitted', `Route: ${this.routeId}`)

      await this.submitReport({
        routeId: this.routeId,
        name: this.name,
        reportType: parseInt(this.reportType)
      })

      await this.loadReports(this.routeId)
      this.reportType = 0
    }
  }
}
</script>

<style scoped lang="scss">
  option {
    background-color: black;

    .light & {
      background-color: white;
    }
  }
</style>

<i18n>
{
  "en": {
    "tellUsWhy": "Please tell us why this link is unsafe",
    "yourNamePlaceholder": "Your name...",
    "scam": "Scam",
    "deadLink": "Dead Link",
    "insecure": "Insecure",
    "phishing": "Phishing (Fake)",
    "add": "Add",
    "cancel": "Cancel"
  },
  "fr": {
    "tellUsWhy": "Veuillez nous expliquer pourquoi ce lien n'est pas sûr",
    "yourNamePlaceholder": "Votre nom...",
    "scam": "Arnaque",
    "deadLink": "Lien mort",
    "insecure": "Peu sûr",
    "phishing": "Phishing (faux)",
    "add": "Ajouter",
    "cancel": "Annuler"
  },
  "es": {
    "tellUsWhy": "Por favor díganos por qué este enlace no es seguro",
    "yourNamePlaceholder": "Tu nombre...",
    "scam": "Estafa",
    "deadLink": "Enlace muerto",
    "insecure": "Inseguro",
    "phishing": "Phishing (falso)",
    "add": "Añadir",
    "cancel": "Cancelar"
  }
}
</i18n>
