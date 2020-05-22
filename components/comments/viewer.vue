<template>
  <div v-show="show" class="a-slideInUp">
    <h1 v-text="$t('comments')" />

    <div v-show="hasComments" class="a-fadeIn">
      <p class="mb-l">
        <span
          v-text="$t('wouldYouLikeTo')" />
        <span
          @click="setIsCommenting(true)"
          v-text="$t('addAComment')"
          class="u-text-link" />
      </p>

      <comment
        v-for="(item, index) in comments"
        :key="index"
        v-bind="item" />
    </div>

    <p
      v-show="hasNoComments"
      class="a-fadeIn">
      <span
        v-text="$t('nobodyHasLeftAComment')" />
      <span
        @click="setIsCommenting(true)"
        v-text="$t('beTheFirst')"
        class="u-text-link" />
    </p>

    <poster v-show="isCommenting" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import comment from '@/components/comments/item.vue'
import poster from '@/components/comments/poster.vue'

export default {
  components: {
    comment,
    poster
  },

  computed: {
    ...mapState('activeRoute', [
      'routeId',
      'displayedPanel'
    ]),

    ...mapState('comments', [
      'comments',
      'isCommenting'
    ]),

    show () {
      return this.displayedPanel === 'comments'
    },

    hasComments () {
      return !this.isCommenting && this.comments.length > 0
    },

    hasNoComments () {
      return !this.isCommenting && this.comments.length === 0
    }
  },
  methods: mapActions('comments', [
    'setIsCommenting'
  ])
}
</script>

<i18n>
{
  "en": {
    "comments": "Comments",
    "wouldYouLikeTo": "Would you like to ",
    "addAComment": "add a comment?",
    "nobodyHasLeftAComment": "Nobody has left any comments on this link yet, ",
    "beTheFirst": "why not be the first?"
  },
  "fr": {
    "comments": "Commentaires",
    "wouldYouLikeTo": "Voudriez-vous ",
    "addAComment": "ajouter un commentaire?",
    "nobodyHasLeftAComment": "Personne n'a encore laissé de commentaires sur ce lien, ",
    "beTheFirst": "Pourquoi ne pas être le premier?"
  },
  "es": {
    "comments": "Comentarios",
    "wouldYouLikeTo": "Te gustaria ",
    "addAComment": "¿añadir un comentario?",
    "nobodyHasLeftAComment": "Nadie ha dejado ningún comentario en este enlace todavía, ",
    "beTheFirst": "¿Por que no ser el primero?"
  }
}
</i18n>
