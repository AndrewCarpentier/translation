import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationEN from './i18n/en.json';
import translationFR from './i18n/fr.json';

// const translationEn = {
//     welcome: "welcome",
//     sample: "Sample <bold><italics>text</italics></bold>",
//     homepage: "homepage"
//   }
//   const translationFr = {
//     welcome: "bienvenue",
//     sample: "Exemple de <bold><italics>texte</italics></bold>",
//     homepage: "acceuil"
//   }
  

i18n
.use(initReactI18next)
.init({
  resources : {
    en: {
      translation : translationEN
    },
    fr: {
      translation : translationFR
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {escapeValue: false}
});

export default i18n;