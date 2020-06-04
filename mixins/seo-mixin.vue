<script>
export default {
  head () {
    return {
      link: [
        { rel: 'canonical', href: `https://cmpct.io${this.$route.path}` }
      ]
    }
  }
}
</script>
