<template>
  <div class="comment">
    <c-icon icon="user-circle" class="fa-fw mr" />
    <div class="content">
      <p v-text="name" class="bold" />
      <p v-text="commentText" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    commentText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .comment {
    display: flex;
    align-items: center;
    width: 500px;
    margin: 0 auto;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;

    svg {
      font-size: 2rem;
    }

    .content {
      flex-grow: 1;
      text-align: left;

      p {
        margin: 0;
      }
    }
  }
</style>
