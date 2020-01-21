<script>
import { mapState } from 'vuex'

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
  }
}
</script>
