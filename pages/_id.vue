<template>
  <container>
    <div v-show="displayedPanel === 'target'">
      <h1>Ready to jump?</h1>
      <p>The link you visited is an alias for a website, do you want to visit it?</p>

      <a :href="target" class="box with-hover break-word" title="Click to navigate">
        <font-awesome-icon icon="globe" class="no-margin" />
        <p v-text="target" />
        <font-awesome-icon icon="chevron-right" class="no-margin" />
      </a>
    </div>

    <comments-viewer />
    <reports-viewer />

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
import commentsViewer from '@/components/comments/viewer.vue'
import reportsViewer from '@/components/reports/viewer.vue'

export default {
  components: {
    container,
    drawers,
    comments,
    reports,
    commentsViewer,
    reportsViewer
  },
  computed: {
    ...mapState('landing', [
      'displayedPanel',
      'target'
    ])
  },
  async created () {
    this.reset()
    const routeId = this.$router.currentRoute.path.slice(1)
    await this.initialise(routeId)
    await this.loadComments(routeId)
  },
  methods: {
    ...mapActions('landing', [
      'initialise',
      'setPanel',
      'reset'
    ]),
    ...mapActions('comments', [
      'loadComments'
    ])
  }
}
</script>
