<template>
  <form
    class="u-standard-width a-fadeIn"
    @submit.prevent="addReport">
    <p
      class="mb-l"
      v-text="$t('tellUsWhy')" />
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
      class="u-hover"
      type="submit"
      v-text="$t('add')" />
    <button
      class="u-hover"
      type="button"
      @click="REPORTS_SET_IS_REPORTING(false)"
      v-text="$t('cancel')" />
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { REPORTS_SET_IS_REPORTING } from '@/store/mutations.constants'

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
      'loadReports'
    ]),

    ...mapMutations('reports', [
      REPORTS_SET_IS_REPORTING
    ]),

    async addReport () {
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
