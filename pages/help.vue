<template>
  <container>
    <h1>Help</h1>
    <div class="help-section">
      <h4>What is cmpct.io</h4>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>

      <h4>What is cmpct.io</h4>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
    </div>
    <div class="help-section">
      <h4>How does it work?</h4>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>

      <h4>What is cmpct.io</h4>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
      <spoiler title="This is a spoiler">
        <p>Answer</p>
      </spoiler>
    </div>
  </container>
</template>

<script>
import container from '@/components/layout/container.vue'
import spoiler from '@/components/help/spoiler.vue'

export default {
  components: {
    container,
    spoiler
  }
}
</script>

<style scoped lang="scss">
  .help-section {
    display: inline-block;
    width: 49%;
    padding: 10px;
    padding-top: 30px;
    max-width: 500px;

    h4 {
      margin: 30px 0 20px 0;
    }
  }
</style>
