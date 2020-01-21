<template>
  <div
    v-show="showSnackbar"
    @click="dismiss"
    class="snackbar flex-container animated bounceInUp">
    <c-icon icon="bell" class="fa-fw mr" />
    <p v-text="snackbarMessage" class="flex-grow" />
    <c-icon icon="times" class="fa-fw" />
  </div>
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
    ]),
    dismiss () {
      this.hideSnackbar()
    }
  }
}
</script>

<style scoped lang="scss">
  .snackbar {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    width: 90%;
    max-width: 600px;
    z-index: 50;
    background-color: black;
    color: white;
    opacity: 0.7;
    margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;

    .light & {
      background-color: white;
      color: black;
    }

    @media (max-width: 768px) {
      left: 0;
    }

    p {
      margin: 0;
    }
  }
</style>
