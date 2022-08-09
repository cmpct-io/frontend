<template>
  <component
    :is="linkElement"
    class="c-cornerButton"
    :class="{ 'c-cornerButton--left' : !isRight }"
    :href="link"
    :to="link"
    :target="target"
    :title="title">
    <c-icon :icon="[iconSet, icon]" />
  </component>
</template>

<script>
export default {
  props: {
    linkElement: {
      type: String,
      default: 'a'
    },

    icon: {
      type: String,
      default: 'github'
    },

    iconSet: {
      type: String,
      default: 'fab'
    },

    link: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    target: {
      type: String,
      default: '_blank'
    },

    isRight: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
  .c-cornerButton {
    position: fixed;
    bottom: 0;
    right: 0;
    border-top-left-radius: 10px;
    background-color: white;
    color: black;
    padding: 10px 15px;
    font-size: 1.3rem;
    transition: all 0.25s ease-in-out;

    &:hover {
      padding: 15px 20px;
      font-size: 1.5rem;
    }

    &.c-cornerButton--left {
      left: 0;
      right: auto;
      border-top-right-radius: 10px;
      border-top-left-radius: 0;
    }

    .light & {
      background-color: black;
      color: white;
    }
  }
</style>
