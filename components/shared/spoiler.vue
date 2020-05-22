<template>
  <div
    @click.prevent="setOpenSpoilerText(title)"
    v-bind:class="[{ 'open': show }]"
    class="spoiler">
    <div class="u-flex-container">
      <p
        v-text="title"
        class="u-flex-grow mb-0" />
      <c-icon
        :icon="icon" />
    </div>
    <div
      v-show="show"
      class="body a-fadeIn">
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
.spoiler{
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  border: 1px solid gray;
  padding: 15px;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;

  &.open {
    background-color: #660066;

    .light & {
      background-color: pink;
    }
  }

  svg {
    margin-top: 5px;
    margin-left: 10px;
  }

  .body {
    margin-top: 10px;
    padding: 10px 0;

    p {
      margin-top: 10px;
    }
  }
}
</style>
