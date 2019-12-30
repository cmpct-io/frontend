<template>
  <div v-show="displayedPanel === 'reports'" class="animated slideInUp">
    <h1>Reports</h1>

    <div v-show="!isReporting && reports.length > 0" class="animated fadeIn">
      <p>If you think this link is unsafe, <span @click="setIsReporting(true)" class="text-link">please report it</span></p>
      <report v-for="(item, index) in reports" :key="index" v-bind="item" />
    </div>

    <div v-show="!isReporting && reports.length === 0">
      <p>Nobody has reported this link yet, <span @click="setIsReporting(true)" class="text-link">please report it if you think it is unsafe</span></p>
    </div>

    <post-report v-show="isReporting" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import report from '@/components/reports/report.vue'
import postReport from '@/components/reports/post.vue'

export default {
  components: {
    report,
    postReport
  },
  computed: {
    ...mapState('landing', [
      'routeId',
      'displayedPanel'
    ]),
    ...mapState('reports', [
      'isReporting',
      'reports'
    ])
  },
  methods: {
    ...mapActions('reports', [
      'submitReport',
      'loadReports',
      'setIsReporting'
    ])
  }
}
</script>
