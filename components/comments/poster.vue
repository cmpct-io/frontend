<template>
  <form
    @submit.prevent="addComment"
    class="u-standard-width a-fadeIn">
    <p
      v-text="$t('description')"
      class="mb-l" />

    <input
      v-model="name"
      :placeholder="$t('namePlaceholder')"
      class="u-border mb-m"
      required>

    <textarea
      v-model="commentText"
      :placeholder="$t('commentPlaceholder')"
      class="u-border mb-m"
      required />

    <button
      v-text="$t('add')"
      class="u-hover"
      type="submit" />

    <button
      @click="COMMENTS_SET_IS_COMMENTING(false)"
      v-text="$t('cancel')"
      class="u-hover"
      type="button" />
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { COMMENTS_SET_IS_COMMENTING } from '@/store/mutations.constants'
import { TRACK_EVENT } from '@/services/analytics-service.js'

export default {
  data () {
    return {
      name: '',
      commentText: ''
    }
  },

  computed: mapState('activeRoute', [
    'routeId'
  ]),

  methods: {
    ...mapActions('comments', [
      'loadComments',
      'submitComment'
    ]),

    ...mapMutations('comments', [
      COMMENTS_SET_IS_COMMENTING
    ]),

    async addComment () {
      TRACK_EVENT(this, 'feature/comment/submitted', `Route: ${this.routeId}`)

      await this.submitComment({
        routeId: this.routeId,
        name: this.name,
        commentText: this.commentText
      })

      this.commentText = ''

      await this.loadComments(this.routeId)
    }
  }
}
</script>

<i18n>
{
  "en": {
    "description": "Let people know what you think about this link",
    "namePlaceholder": "Your name...",
    "commentPlaceholder": "Your comment...",
    "add": "Add",
    "cancel": "Cancel"
  },
  "fr": {
    "description": "Faites savoir ce que vous pensez de ce lien",
    "namePlaceholder": "Votre nom...",
    "commentPlaceholder": "Votre commentaire...",
    "add": "Ajouter",
    "cancel": "Annuler"
  },
  "es": {
    "description": "Deje que la gente sepa lo que piensa sobre este enlace",
    "namePlaceholder": "Tu nombre...",
    "commentPlaceholder": "Tu comentario...",
    "add": "Añadir",
    "cancel": "Cancelar"
  }
}
</i18n>
