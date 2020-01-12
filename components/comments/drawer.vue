<template>
  <section class="history mr">
    <div v-show="displayedPanel === 'target'" @click="showPanel('comments')" class="drawer animated slideInUp">
      <p>
        <c-icon icon="comment-alt" class="mr-s" />
        <span v-text="$t('comments')" class="mr-s" />
        <span v-text="comments.length" class="text-small" />
      </p>
    </div>

    <div v-show="displayedPanel === 'comments'" class="history-link animated slideInDown">
      <div @click="showPanel('target')" class="button with-hover">
        <c-icon icon="times" />
      </div>
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
    ])
  },
  methods: {
    ...mapActions('landing', ['showPanel'])
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
