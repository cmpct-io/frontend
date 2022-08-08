<template>
  <div class="c-link u-flex-container a-fadeIn">
    <p
      class="u-text-small u-flex-grow u-break-word mr"
      v-text="link" />

    <c-icon
      icon="times"
      class="u-text-small u-pointer"
      @click="GENERATOR_REMOVE_LINK(link)" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { GENERATOR_REMOVE_LINK } from '@/store/mutations.constants'

export default {
  props: {
    link: {
      type: String,
      required: true
    }
  },

  methods: mapMutations('generator', [
    GENERATOR_REMOVE_LINK
  ])
}
</script>

<style scoped lang="scss">
.c-link {
  padding: 10px 15px;
  border-bottom: 1px solid white;
  border-radius: 5px;

  .light & {
    border-bottom: 1px solid black;
  }
}
</style>
