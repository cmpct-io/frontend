<template>
  <form @submit.prevent="addReport" class="standard-width animated fadeIn">
    <p v-text="$t('tellUsWhy')" class="mb-l" />
    <input v-model="name" :placeholder="$t('yourNamePlaceholder')" required>
    <select v-model="reportType">
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

    <button v-text="$t('add')" class="with-hover" type="submit" />
    <button @click="setIsReporting(false)" v-text="$t('cancel')" class="with-hover" type="button" />
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      name: '',
      reportType: 0
    }
  },
  computed: {
    ...mapState('landing', ['routeId'])
  },
  methods: {
    ...mapActions('reports', [
      'submitReport',
      'loadReports',
      'setIsReporting'
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
  input, select {
    width: 100%;
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px solid white;
    padding: 10px 20px;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
  }

  select {
    opacity: 0.6;
    background-color: black;
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
  }
}
</i18n>
