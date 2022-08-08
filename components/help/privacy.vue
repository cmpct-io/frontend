<template>
  <div class="help-section">
    <h4 v-text="$t('sectionTitle')" class="help-title mb-m" />
    <shared-spoiler :title="$t('q1.title')">
      <p v-text="$t('q1.answer1')" />
      <p v-text="$t('q1.bullet1')" />
      <p v-text="$t('q1.bullet2')" />
      <p v-text="$t('q1.bullet3')" />
    </shared-spoiler>
    <shared-spoiler :title="$t('q2.title')">
      <p v-text="$t('q2.answer1')" />
    </shared-spoiler>
    <shared-spoiler :title="$t('q3.title')">
      <p v-text="$t('q3.answer1')" />
    </shared-spoiler>
    <shared-spoiler :title="$t('q4.title')">
      <p v-text="$t('q4.answer1')" />
    </shared-spoiler>
  </div>
</template>

<i18n>
{
  "en": {
    "sectionTitle": "Your privacy",
    "q1": {
      "title": "What data do you collect?",
      "answer1": "We only actively collect information that we need to run the service, that includes the following",
      "bullet1": "Website URL: That you submit to generate a short link",
      "bullet2": "Your name: But only if you choose to provide it when adding a comment or report.",
      "bullet3": "Network information: All requests on the internet transmit some data when communicating, this includes information like your IP address and your User Agent (web browser name). We don’t use or store this information."
    },
    "q2": {
      "title": "Do you sell my data?",
      "answer1": "No, we absolutely don’t sell or give your data away, we only collect information we need to deliver the service. Cmpct.io is privacy first, it is free to use; you don’t pay with your personal information either."
    },
    "q3": {
      "title": "What do you store on my device?",
      "answer1": "We wanted to deliver a useful 'history' feature on the homepage so you can quickly get back to links you used previously. We store this information on your device (using LocalStorage). You can clear this data whenever you want, and it is never transmitted to our servers."
    },
    "q4": {
      "title": "What analytics do you use?",
      "answer1": "We use micro-stat which simply tells us basic statistics to show how our website is used such as counting page loads, such data does not include anything sensitive or otherwise about you. Micro-stat is another of our technologies, not a third party company."
    }
  },
  "fr": {
    "sectionTitle": "Votre vie privée",
    "q1": {
      "title": "Quelles données collectez-vous?",
      "answer1": "Nous collectons uniquement les informations dont nous avons besoin pour exécuter le service, notamment les informations suivantes...",
      "bullet1": "URL du site Web: que vous soumettez pour générer un lien court",
      "bullet2": "Votre nom: mais uniquement si vous choisissez de le fournir lors de l'ajout d'un commentaire ou d'un rapport.",
      "bullet3": "Informations réseau: toutes les demandes sur Internet transmettent certaines données lors de la communication, notamment des informations telles que votre adresse IP et votre agent utilisateur (nom du navigateur Web). Nous n'utilisons ni ne stockons ces informations."
    },
    "q2": {
      "title": "Vendez-vous mes données?",
      "answer1": "Non, nous ne vendons ni ne donnons absolument vos données, nous collectons uniquement les informations dont nous avons besoin pour fournir le service. Cmpct.io est la confidentialité d'abord, il est gratuit à utiliser; vous ne payez pas non plus avec vos informations personnelles."
    },
    "q3": {
      "title": "Que stockez-vous sur mon appareil?",
      "answer1": "Nous voulions proposer une fonctionnalité 'historique' utile sur la page d'accueil afin que vous puissiez rapidement revenir aux liens que vous avez utilisés précédemment. Nous stockons ces informations sur votre appareil (à l'aide de LocalStorage). Vous pouvez effacer ces données quand vous le souhaitez et elles ne sont jamais transmises à nos serveurs."
    },
    "q4": {
      "title": "Quelles analyses utilisez-vous?",
      "answer1": "Nous utilisons des micro-stats qui nous indiquent simplement des statistiques de base pour montrer comment notre site Web est utilisé, comme le comptage des chargements de pages, ces données n'incluent rien de sensible ou autrement vous concernant. Micro-stat est une autre de nos technologies, pas une société tierce"
    }
  },
  "es": {
    "sectionTitle": "Tu privacidad",
    "q1": {
      "title": "¿Qué datos recopilas?",
      "answer1": "Solo recopilamos activamente la información que necesitamos para ejecutar el servicio, que incluye lo siguiente",
      "bullet1": "URL del sitio web: que envía para generar un enlace corto",
      "bullet2": "Su nombre: pero solo si elige proporcionarlo al agregar un comentario o informe.",
      "bullet3": "Información de red: todas las solicitudes en Internet transmiten algunos datos cuando se comunican, esto incluye información como su dirección IP y su Agente de usuario (nombre del navegador web). No utilizamos ni almacenamos esta información."
    },
    "q2": {
      "title": "¿Venden mis datos?",
      "answer1": "No, no vendemos ni cedemos sus datos, solo recopilamos la información que necesitamos para brindar el servicio. Cmpct.io es privacidad primero, es de uso gratuito; tampoco paga con su información personal."
    },
    "q3": {
      "title": "¿Qué guardas en mi dispositivo?",
      "answer1": "Queríamos ofrecer una función útil de 'historial' en la página de inicio para que pueda volver rápidamente a los enlaces que utilizó anteriormente. Almacenamos esta información en su dispositivo (usando LocalStorage). Puede borrar estos datos cuando lo desee, y nunca se transmiten a nuestros servidores."
    },
    "q4": {
      "title": "¿Qué análisis utilizas?",
      "answer1": "Usamos micro-stat que simplemente nos brinda estadísticas básicas para mostrar cómo se usa nuestro sitio web, como contar las cargas de página, dichos datos no incluyen nada confidencial o de otro tipo sobre usted. Micro-stat es otra de nuestras tecnologías, no una empresa de terceros"
    }
  }
}
</i18n>
