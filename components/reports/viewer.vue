<template>
  <div v-show="displayedPanel === 'reports'" class="animated slideInUp">
    <h1>Reports</h1>
    <report v-for="(item, index) in reports" :key="index" v-bind="item" />

    <button @click="addReport" type="button">
      Add
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import report from '@/components/reports/report.vue'

export default {
  components: {
    report
  },
  computed: {
    ...mapState('landing', [
      'routeId',
      'displayedPanel'
    ]),
    ...mapState('reports', [
      'reports'
    ])
  },
  methods: {
    ...mapActions('reports', [
      'submitReport',
      'loadReports'
    ]),
    async addReport () {
      await this.submitReport({
        routeId: this.routeId,
        name: 'Donald Duck',
        reportType: 1
      })

      await this.loadReports(this.routeId)
    }
  }
}
</script>
