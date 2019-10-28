import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = 
{
  "fr": {
    "change-lang": "en",
    "back": "Retour à Pierre & Kévin",
    "flag": "<span class='flag-icon flag-icon-gb'></span>",
    "final-price": "Votre devis est compris entre {priceMin}€ et {priceMax}€",
    "restart": "Recommencer",
    "go-to-form": "Faire la demande gratuite !",
    "form": {
      "info": "Les informations que vous avez saisies sont enregistrées. Merci de remplir le formulaire ci-dessous et de les accompagner d'un message expliquant plus en détails votre projet.",
      "firstName": "Prénom",
      "lastName": "Nom",
      "email": "Email",
      "your-msg": "Votre message",
      "field-missing": "Veuillez saisir le champ {field}",
      "invalid-email": "Email invalide",
      "error": "Une erreur est survenue, merci de réessayer plus tard.",
      "send-form": "Envoyer",
      "sending": "Envoi...",
      "confirm": "Devis envoyé avec succès, nous vous répondrons sous les meilleurs délais."
    }
  },
  "en": {
    "change-lang": "fr",
    "back": "Back to Pierre & Kévin",
    "flag": "<span class='flag-icon flag-icon-fr'></span>",
    "final-price": "Your estimate is included between {priceMin}€ and {priceMax}€",
    "restart": "Restart",
    "go-to-form": "Apply for free!",
    "form": {
      "info": "The information that you have provided is saved. Please complete the form below with a message to explain your project in details.",
      "firstName": "First name",
      "lastName": "Last name",
      "email": "Email",
      "your-msg": "Your message",
      "field-missing": "Please fill {field}",
      "invalid-email": "Invalid email",
      "error": "An error occured, please retry later.",
      "send-form": "Send",
      "sending": "Sending...",
      "confirm": "Sent with success! We will reply as soon as we can."
    }
  }
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: messages
})
