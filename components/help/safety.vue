<template>
  <div class="help-section">
    <h4 v-text="$t('sectionTitle')" class="help-title mb-m" />
    <spoiler :title="$t('q1.title')">
      <p v-text="$t('q1.answer1')" />
    </spoiler>
    <spoiler :title="$t('q2.title')">
      <p v-text="$t('q2.answer1')" />
      <p v-text="$t('q2.answer2')" />
      <p v-text="$t('q2.answer3')" />
      <p v-text="$t('q2.answer4')" />
    </spoiler>
  </div>
</template>

<i18n>
{
  "en": {
    "sectionTitle": "Your safety",
    "q1": {
      "title": "Is cmpct.io safe?",
      "answer1": "We built cmpct.io because we saw that scammers swarmed around link shortening websites, this is a shame as the service is actually really useful. So cmpct.io has been built from the ground up to be safe, protecting you from unsafe websites."
    },
    "q2": {
      "title": "Why is cmpct.io safe?",
      "answer1": "When you generate a link through similar websites like bit.ly you are given a short link, when you visit that link you are immediately redirected to the original website. If the original website is safe then the service works as designed, but scammers may choose to use these services to hide from you where the link will actually go.",
      "answer2": "We don’t automatically redirect you to the original URL, when using a link from cmpct.io you are always presented with a landing page that tells you where the link will go.",
      "answer3": "Scammers hate cmpct.io, because not only can you see where the link will go, you can even report a link for being unsafe which means other users are safer too. As a result scammer’s don’t use cmpct.io; preferring to use services where they can trick you much easier.",
      "answer4": "Socially engineered scam’s are on the rise, just because your colleague or friend sent you a link does not mean it is safe. We always trust content sent to us by somebody we know, but if that other person is compromised you could be putting yourself at risk by trusting inherently. With cmpct.io you will be safer because you actively choose to go to a link."
    }
  },
  "fr": {
    "sectionTitle": "Votre sécurité",
    "q1": {
      "title": "Cmpct.io est-il sûr?",
      "answer1": "Nous avons construit cmpct.io parce que nous avons vu que des escrocs pullulaient autour des sites Web de raccourcissement de liens, c'est dommage car le service est en fait vraiment utile. Donc, cmpct.io a été conçu à partir de zéro pour être sûr, vous protégeant des sites Web dangereux."
    },
    "q2": {
      "title": "Pourquoi cmpct.io est-il sûr?",
      "answer1": "Lorsque vous générez un lien via des sites Web similaires comme bit.ly, vous recevez un lien court, lorsque vous visitez ce lien, vous êtes immédiatement redirigé vers le site Web d'origine. Si le site Web d'origine est sûr, le service fonctionne comme prévu, mais les fraudeurs peuvent choisir d'utiliser ces services pour vous cacher où le lien ira réellement.",
      "answer2": "Nous ne vous redirigeons pas automatiquement vers l'URL d'origine, lorsque vous utilisez un lien de cmpct.io, vous êtes toujours présenté avec une page de destination qui vous indique où le lien ira.",
      "answer3": "Les fraudeurs détestent cmpct.io, car non seulement vous pouvez voir où le lien ira, mais vous pouvez même signaler un lien comme étant dangereux, ce qui signifie que les autres utilisateurs sont également plus sûrs. En conséquence, l'escroc n'utilise pas cmpct.io; préférant utiliser des services où ils peuvent vous tromper beaucoup plus facilement.",
      "answer4": "Les escroqueries d'ingénierie sociale sont en augmentation, ce n'est pas parce que votre collègue ou ami vous a envoyé un lien qu'il est sûr. Nous faisons toujours confiance au contenu qui nous est envoyé par quelqu'un que nous connaissons, mais si cette autre personne est compromise, vous pourriez vous mettre en danger en faisant confiance intrinsèquement. Avec cmpct.io, vous serez plus en sécurité car vous choisissez activement d'accéder à un lien."
    }
  },
  "es": {
    "sectionTitle": "Tu seguridad",
    "q1": {
      "title": "¿Es seguro cmpct.io?",
      "answer1": "Creamos cmpct.io porque vimos que los estafadores pululaban por los sitios web de acortamiento de enlaces, es una pena, ya que el servicio es realmente útil. Por lo tanto, cmpct.io se ha creado desde cero para ser seguro y protegerlo de sitios web inseguros."
    },
    "q2": {
      "title": "¿Por qué es seguro cmpct.io?",
      "answer1": "Cuando genera un enlace a través de sitios web similares como bit.ly, se le proporciona un enlace corto, cuando visita ese enlace, se lo redirige inmediatamente al sitio web original. Si el sitio web original es seguro, entonces el servicio funciona según lo diseñado, pero los estafadores pueden optar por utilizar estos servicios para esconderse de dónde irá realmente el enlace.",
      "answer2": "No lo redireccionamos automáticamente a la URL original, cuando utiliza un enlace de cmpct.io siempre se le presenta una página de destino que le indica a dónde irá el enlace.",
      "answer3": "Los estafadores odian cmpct.io, porque no solo puedes ver a dónde irá el enlace, sino que también puedes informar que un enlace no es seguro, lo que significa que otros usuarios también están más seguros. Como resultado, los estafadores no usan cmpct.io; prefiriendo usar servicios donde pueden engañarte mucho más fácilmente.",
      "answer4": "Las estafas de ingeniería social están en aumento, solo porque su colega o amigo le haya enviado un enlace no significa que sea seguro. Siempre confiamos en el contenido que nos envía alguien que conocemos, pero si esa otra persona se ve comprometida, usted podría estar en riesgo al confiar inherentemente. Con cmpct.io estará más seguro porque elige activamente ir a un enlace."
    }
  }
}
</i18n>
