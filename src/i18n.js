import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = 
{
  "fr": {
    "change-lang": "en",
    "back": "Retour",
    "flag": "<span class='flag-icon flag-icon-gb'></span>",
    "final-price": "Votre devis est compris entre {{ priceMin }}€ et {{ priceMax }}€",
    "restart": "Recommencer",
    "go-to-form": "Faire la demande gratuite !",
    "form": {
      "info": "Les informations que vous avez saisies sont enregistrées. Merci de remplir les informations ci-dessous et de les accompagner d'un message expliquant plus en détail votre projet.",
      "firstName": "",
      "lastName": "",
      "email": "",
      "your-msg": "Votre message",
      "send-form": "Envoyer",
      "sending": "Envoi...",
      "confirm": "Devis envoyé avec succès, nous vous répondrons sous les meilleurs délais."
    }
  },
  "en": {
    "change-lang": "fr",
    "back": "Back",
    "flag": "<span class='flag-icon flag-icon-fr'></span>",
    "final-price": "Your estimate is included between {{ priceMin }}€ and {{ priceMax }}€",
    "restart": "Restart",
    "go-to-form": "Apply for free!",
    "form": {
      "info": "The informations you entered are saved. Please complete the form below with a text to explain your project in details.",
      "firstName": "First name",
      "lastName": "Last name",
      "email": "Email",
      "your-msg": "Your message",
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
