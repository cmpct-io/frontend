<template>
  <div v-show="displayedPanel === 'reports'" class="animated slideInUp">
    <h1>Reports</h1>
    <p>Here you can see reports made by other users, or report the link yourself</p>

    {{ reports }}

    <button @click="addReport" type="button">
      Add
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('landing', [
      'routeId',
      'displayedPanel',
      'reports'
    ])
  },
  methods: {
    ...mapActions('reports', ['submitReport']),
    addReport () {
      this.submitReport({
        routeId: this.parameter,
        name: 'Donald Duck',
        reportType: 1
      })
    }
  }
}
</script>
