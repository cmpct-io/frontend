<template>
  <div
    v-show="showSnackbar"
    @click="SNACKBAR_HIDE()"
    class="c-snackbar u-flex-container u-pointer a-slideInUp">
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
import { mapState, mapMutations } from 'vuex'
import { SNACKBAR_HIDE } from '@/store/mutations.constants'

export default {
  computed: mapState('snackbar', [
    'showSnackbar',
    'snackbarMessage'
  ]),

  methods: mapMutations('snackbar', [
    SNACKBAR_HIDE
  ])
}
</script>

<style scoped lang="scss">
  .c-snackbar {
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

    .light & {
      background-color: white;
      border: 1px solid #DBDBDB;
    }
  }
</style>
