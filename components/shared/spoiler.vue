<template>
  <div
    :class="[{ 'open': show }]"
    class="c-spoiler u-border u-pointer"
    @click.prevent="setOpenSpoilerText(title)">
    <div class="u-flex-container">
      <p
        class="u-flex-grow mb-0"
        v-text="title" />
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
    ...mapState('spoiler', [
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

  methods: mapActions('spoiler', [
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
