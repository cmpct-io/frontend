<template>
  <div class="history-link" title="View history">
    <router-link to="history" class="button with-hover">
      <font-awesome-icon icon="chevron-down" />
    </router-link>
  </div>
</template>

<style scoped lang="scss">
  .history-link {
    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;

    a.button {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 1px solid white;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      margin: 0 auto;
      border-radius: 50%;

        svg {
          margin-top: 13px;
        }
    }
  }
</style>
