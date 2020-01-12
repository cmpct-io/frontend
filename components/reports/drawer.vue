<template>
  <section class="history">
    <div v-show="displayedPanel === 'target'" @click="showPanel('reports')" class="drawer animated slideInUp">
      <p v-bind:class="[{ 'text-warning': reports.length > 0 }]">
        <c-icon v-bind:class="[{ 'animated shake': reports.length > 0 }]" icon="bell" class="mr-s" />
        <span v-text="$t('reports')" class="mr-s" />
        <span v-text="reports.length" class="text-small" />
      </p>
    </div>

    <div v-show="displayedPanel === 'reports'" class="history-link animated slideInDown">
      <div @click="showPanel('target')" class="button with-hover">
        <c-icon icon="times" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('landing', ['displayedPanel']),
    ...mapState('reports', ['reports'])
  },
  methods: {
    ...mapActions('landing', ['showPanel'])
  }
}
</script>

<style scoped lang="scss">
  section.history {
    display: inline-block;
  }
</style>

<i18n>
{
  "en": {
    "reports": "Reports"
  },
  "fr": {
    "reports": "Rapports"
  },
  "es": {
    "reports": "Informes"
  }
}
</i18n>
