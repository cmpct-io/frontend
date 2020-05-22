<template>
  <div
    @click.prevent="setOpenSpoilerText(title)"
    v-bind:class="[{ 'open': show }]"
    class="c-spoiler u-border u-pointer">
    <div class="u-flex-container">
      <p
        v-text="title"
        class="u-flex-grow mb-0" />
      <c-icon
        :icon="icon" />
    </div>
    <div
      v-show="show"
      class="c-spoiler-body a-fadeIn">
      <hr>
      <slot />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState('help', [
      'openSpoilerText'
    ]),

    show () {
      return this.title === this.openSpoilerText
    },

    icon () {
      return this.show
        ? 'chevron-up'
        : 'chevron-down'
    }
  },

  methods: mapActions('help', [
    'setOpenSpoilerText'
  ])
}
</script>

<style lang="scss">
.c-spoiler{
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  padding: 15px;
  user-select: none;
  margin-bottom: 10px;
  text-align: left;

  &.open {
    background-color: #660066;

    .light & {
      background-color: pink;
    }
  }

  .c-spoiler-body {
    margin-top: 10px;

    p {
      margin-top: 10px;
    }
  }
}
</style>
