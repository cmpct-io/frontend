<template>
  <form @submit.prevent="addReport" class="standard-width animated fadeIn">
    <p>Please tell us why this link is unsafe</p>
    <input v-model="name" placeholder="Your name" required>
    <textarea v-model="reportType" placeholder="Your comment" required />
    <button class="with-hover" type="submit">
      Add
    </button>
    <button @click="setIsReporting(false)" class="with-hover" type="button">
      Cancel
    </button>
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
        reportType: this.reportType
      })

      await this.loadReports(this.routeId)
      this.reportType = 0
    }
  }
}
</script>

<style scoped lang="scss">
  input, textarea {
    width: 100%;
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px solid white;
    padding: 10px 20px;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
  }
</style>
