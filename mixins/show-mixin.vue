<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
      this.$emit('toggled', this.show)
    },
    set (value) {
      this.show = value
    }
  }
}
</script>
