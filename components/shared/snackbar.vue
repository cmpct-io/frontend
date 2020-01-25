<template>
  <transition name="fade">
    <div
      v-show="showSnackbar"
      @click="hideSnackbar()"
      class="snackbar flex-container">
      <c-icon
        icon="bell"
        class="fa-fw mr" />
      <p
        v-text="snackbarMessage"
        class="flex-grow" />
      <c-icon
        icon="times"
        class="fa-fw" />
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('snackbar', [
      'showSnackbar',
      'snackbarMessage'
    ])
  },
  methods: {
    ...mapActions('snackbar', [
      'hideSnackbar'
    ])
  }
}
</script>

<style scoped lang="scss">
  .snackbar {
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    width: 90%;
    max-width: 800px;
    z-index: 50;
    background-color: black;
    border: 1px solid #262626;
    border-bottom: 0;
    margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;

    .light & {
      background-color: white;
      border: 1px solid #DBDBDB;
      border-bottom: 0;
    }

    @media (max-width: 768px) {
      left: 0;
    }

    p {
      margin: 0;
    }
  }
</style>
