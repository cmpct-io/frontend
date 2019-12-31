<template>
  <section class="history">
    <div v-show="displayedPanel === 'target'" @click="showPanel('reports')" class="drawer animated slideInUp">
      <p v-bind:class="[{ 'text-warning': reports.length > 0 }]">
        <c-icon v-bind:class="[{ 'animated shake': reports.length > 0 }]" icon="bell" class="mr-s" />
        <span class="mr-s">Reports</span>
        <span v-text="reports.length" class="text-small" />
      </p>
    </div>

    <div v-show="displayedPanel === 'reports'" class="history-link animated slideInDown" title="View history">
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

  .history-link {
    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;

    .button {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 1px solid white;
      font-size: 1rem;
      cursor: pointer;
      margin: 0 auto;
      border-radius: 50%;

        svg {
          margin-top: 13px;
        }
    }
  }
</style>
