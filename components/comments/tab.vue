<template>
  <section class="u-inline-block mr">
    <div
      v-show="showTarget"
      class="tab a-slideInUp"
      @click="ACTIVE_ROUTE_SHOW_PANEL('comments')">
      <p>
        <c-icon
          icon="comment-alt"
          class="mr-s" />
        <span
          class="mr-s"
          v-text="$t('comments')" />
        <span
          class="u-text-small"
          v-text="comments.length" />
      </p>
    </div>

    <shared-circle-button v-show="showComments" icon="times" @clicked="ACTIVE_ROUTE_SHOW_PANEL('target')" />
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
