<template>
  <section class="inline-block mr">
    <div v-show="showTarget" @click="showPanel('comments')" class="drawer animated slideInUp">
      <p>
        <c-icon icon="comment-alt" class="mr-s" />
        <span v-text="$t('comments')" class="mr-s" />
        <span v-text="comments.length" class="text-small" />
      </p>
    </div>

    <div
      v-show="showComments"
      @click="showPanel('target')"
      class="circle-button with-hover animated slideInDown">
      <c-icon icon="times" />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
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
  methods: {
    ...mapActions('landing', [
      'showPanel'
    ])
  }
}
</script>

<style scoped lang="scss">
  section.history {
    display: inline-block;
  }
</style>

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
