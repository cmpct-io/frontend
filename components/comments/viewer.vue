<template>
  <div v-show="displayedPanel === 'comments'" class="animated slideInUp">
    <h1 v-text="$t('comments')" />

    <div v-show="!isCommenting && comments.length > 0" class="animated fadeIn">
      <p class="mb-l">
        {{ $t('wouldYouLikeTo') }}<span @click="setIsCommenting(true)" class="text-link">{{ $t('addAComment') }}</span>
      </p>
      <comment v-for="(item, index) in comments" :key="index" v-bind="item" />
    </div>

    <div v-show="!isCommenting && comments.length === 0">
      <p>{{ $t('nobodyHasLeftAComment') }}<span @click="setIsCommenting(true)" class="text-link">{{ $t('beTheFirst') }}</span></p>
    </div>

    <post v-show="isCommenting" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import comment from '@/components/comments/comment.vue'
import post from '@/components/comments/post.vue'

export default {
  components: {
    comment,
    post
  },
  computed: {
    ...mapState('landing', [
      'routeId',
      'displayedPanel'
    ]),
    ...mapState('comments', [
      'comments',
      'isCommenting'
    ])
  },
  methods: {
    ...mapActions('comments', [
      'setIsCommenting'
    ])
  }
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
