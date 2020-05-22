<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('theme', [
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
      this.setTheme(false)
    }
  },

  methods: mapActions('theme', [
    'setTheme'
  ])
}
</script>
