<template>
  <div class="link flex-container fadeIn">
    <p
      v-text="link"
      class="text-small flex-grow break-word mr" />
    <c-icon
      @click="removeLink(link)"
      icon="times"
      class="text-small cursor-pointer" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    link: {
      type: String,
      required: true
    }
  },

  methods: mapActions('generator', [
    'removeLink'
  ])
}
</script>

<style scoped lang="scss">
.link {
  padding: 10px 15px;
  border-bottom: 1px solid white;
  border-radius: 5px;

  .light & {
    border-bottom: 1px solid black;
  }

  svg {
    font-size: 1rem;
  }
}
</style>
