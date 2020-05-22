<template>
  <section class="u-inline-block mr">
    <div
      v-show="showTarget"
      @click="showPanel('comments')"
      class="tab a-slideInUp">
      <p>
        <c-icon
          icon="comment-alt"
          class="mr-s" />
        <span
          v-text="$t('comments')"
          class="mr-s" />
        <span
          v-text="comments.length"
          class="u-text-small" />
      </p>
    </div>

    <circle-button v-show="showComments" @clicked="showPanel('target')" icon="times" />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import circleButton from '@/components/shared/circle-button.vue'

export default {
  components: {
    circleButton
  },
  computed: {
    ...mapState('landing', [
      'displayedPanel'
    ]),

    ...mapState('comments', [
      'comments'
    ]),

    showTarget () {
      return this.displayedPanel === 'target'
    },

    showComments () {
      return this.displayedPanel === 'comments'
    }
  },

  methods: mapActions('landing', [
    'showPanel'
  ])
}
</script>

<i18n>
{
  "en": {
    "comments": "Comments"
  },
  "fr": {
    "comments": "Commentaire"
  },
  "es": {
    "comments": "Comentarios"
  }
}
</i18n>
