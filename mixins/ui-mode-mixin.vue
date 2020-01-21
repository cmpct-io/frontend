<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('background', [
      'isDarkMode'
    ]),
    uiMode () {
      return this.isDarkMode
        ? 'dark'
        : 'light'
    }
  },
  created () {
    const uiMode = this.$cookies.get('ui-mode')

    if (uiMode === 'light') {
      this.setUIMode(false)
    }
  },
  methods: {
    ...mapActions('background', [
      'setUIMode'
    ])
  }
}
</script>
