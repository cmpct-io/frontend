<template>
  <a class="c-repoLink u-hidden-mobile" href="https://github.com/cmpct-io" target="blank" title="Github Repo">
    <c-icon  :icon="['fab', 'github']" />
  </a>
</template>

<style scoped lang="scss">
  .c-repoLink {
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

    .light & {
      background-color: black;
      color: white;
    }
  }
</style>
