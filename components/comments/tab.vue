<template>
  <section class="u-inline-block mr">
    <div
      v-show="showTarget"
      @click="ACTIVE_ROUTE_SHOW_PANEL('comments')"
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

    <circle-button v-show="showComments" @clicked="ACTIVE_ROUTE_SHOW_PANEL('target')" icon="times" />
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ACTIVE_ROUTE_SHOW_PANEL } from '@/store/mutations.constants'

export default {
  computed: {
    ...mapState('activeRoute', [
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

  methods: mapMutations('activeRoute', [
    ACTIVE_ROUTE_SHOW_PANEL
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
