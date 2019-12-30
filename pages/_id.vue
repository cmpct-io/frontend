<template>
  <container>
    <div v-show="displayedPanel === 'target'">
      <h1>Ready to jump?</h1>
      <p>The link you visited is an alias for a website, do you want to visit it?</p>

      <a :href="target" class="box with-hover" title="Click to navigate">
        <font-awesome-icon icon="globe" class="no-margin" />
        <p v-text="target" />
        <font-awesome-icon icon="chevron-right" class="no-margin" />
      </a>
    </div>

    <div v-show="displayedPanel === 'comments'" class="history-content animated slideInUp">
      <h1>Comments</h1>
      <p>Here are some recent comments about this link</p>
    </div>

    <div v-show="displayedPanel === 'reports'" class="history-content animated slideInUp">
      <h1>Reports</h1>
      <p>Here you can see reports made by other users, or report the link yourself</p>
    </div>

    <drawers>
      <comments />
      <reports />
    </drawers>
  </container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import container from '@/components/layout/container.vue'
import drawers from '@/components/layout/drawers.vue'
import comments from '@/components/comments/drawer.vue'
import reports from '@/components/reports/drawer.vue'

export default {
  components: {
    container,
    drawers,
    comments,
    reports
  },
  computed: {
    ...mapState('landing', [
      'displayedPanel',
      'target'
    ]),
    parameter () {
      return this.$router.currentRoute.path.slice(1)
    }
  },
  mounted () {
    this.reset()
    this.initialise(this.parameter)

    // Display Comments / Reports
  },
  methods: {
    ...mapActions('landing', [
      'initialise',
      'setPanel',
      'reset'
    ])
  }
}
</script>
