<template>
  <div @click.prevent="toggle" class="spoiler" v-bind:class="[{ 'open': show }]">
    <div class="inner">
      <p v-text="title" class="flex-grow-1 mb-0" />
      <font-awesome-icon v-if="!show" icon="chevron-down" />
      <font-awesome-icon v-if="show" icon="chevron-up" />
    </div>
    <div v-show="show" class="body animated fadeIn">
      <hr />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
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
