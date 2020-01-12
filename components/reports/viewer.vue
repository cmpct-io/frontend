<template>
  <div v-show="displayedPanel === 'reports'" class="animated slideInUp">
    <h1 v-text="$t('reports')" />

    <div v-show="!isReporting && reports.length > 0" class="animated fadeIn">
      <p class="mb-l">
        <span v-text="$t('ifYouThink')" />
        <span @click="setIsReporting(true)" v-text="$t('pleaseReportIt')" class="text-link" />
      </p>
      <report v-for="(item, index) in reports" :key="index" v-bind="item" />
    </div>

    <div v-show="!isReporting && reports.length === 0">
      <p>
        <span v-text="$t('nobodyHasReported')" />
        <span @click="setIsReporting(true)" v-text="$t('pleaseReportIfYouThink')" class="text-link" />
      </p>
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

<i18n>
{
  "en": {
    "reports": "Reports",
    "ifYouThink": "If you think this link is unsafe, ",
    "pleaseReportIt": "please report it",
    "nobodyHasReported": "Nobody has reported this link yet, ",
    "pleaseReportIfYouThink": "please report it if you think it is unsafe"
  },
  "fr": {
    "reports": "Rapports",
    "ifYouThink": "Si vous pensez que ce lien n'est pas sûr, ",
    "pleaseReportIt": "veuillez le signaler",
    "nobodyHasReported": "Personne n'a encore signalé ce lien, ",
    "pleaseReportIfYouThink": "veuillez le signaler si vous pensez qu'il est dangereux"
  }
}
</i18n>
