<template>
  <section class="inline-block">
    <div
      v-show="displayedPanel === 'target'"
      @click="showPanel('reports')"
      class="tab slideInUp">
      <p v-bind:class="[{ 'text-warning': reports.length > 0 }]">
        <c-icon
          v-bind:class="[{ 'shake': reports.length > 0 }]"
          icon="bell"
          class="mr-s" />
        <span
          v-text="$t('reports')"
          class="mr-s" />
        <span
          v-text="reports.length"
          class="text-small" />
      </p>
    </div>

    <div
      v-show="displayedPanel === 'reports'"
      @click="showPanel('target')"
      class="circle-button with-hover slideInDown">
      <c-icon icon="times" />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('landing', [
      'displayedPanel'
    ]),

    ...mapState('reports', [
      'reports'
    ])
  },

  methods: mapActions('landing', [
    'showPanel'
  ])
}
</script>

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
