<template>
  <div @click.prevent="toggle" v-bind:class="[{ 'open': show }]" class="spoiler">
    <div class="inner">
      <p v-text="title" class="flex-grow-1 mb-0" />
      <font-awesome-icon v-if="!show" icon="chevron-down" />
      <font-awesome-icon v-if="show" icon="chevron-up" />
    </div>
    <div v-show="show" class="body animated fadeIn">
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
    ...mapState('help', ['openSpoilerText']),
    show () {
      return this.title === this.openSpoilerText
    }
  },
  methods: {
    ...mapActions('help', ['setOpenSpoilerText']),
    toggle () {
      this.setOpenSpoilerText(this.title)
    }
  }
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
  }

  .inner {
    display: flex;
    align-items: center;
  }

  p {
    margin-bottom: 0;
    flex-grow: 1;
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
