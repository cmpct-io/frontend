<template>
  <div
    v-show="showSnackbar"
    @click="hideSnackbar()"
    class="snackbar u-flex-container slideInUp">
    <c-icon
      icon="bell"
      class="fa-fw mr" />
    <p
      v-text="snackbarMessage"
      class="u-flex-grow" />
    <c-icon
      icon="times"
      class="fa-fw" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState('snackbar', [
    'showSnackbar',
    'snackbarMessage'
  ]),

  methods: mapActions('snackbar', [
    'hideSnackbar'
  ])
}
</script>

<style scoped lang="scss">
  .snackbar {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    width: 90%;
    max-width: 800px;
    z-index: 50;
    background-color: black;
    border: 1px solid #262626;
    margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;

    .light & {
      background-color: white;
      border: 1px solid #DBDBDB;
    }

    @media (max-width: 768px) {
      left: 0;
    }

    p {
      margin: 0;
    }
  }
</style>
