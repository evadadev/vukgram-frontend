import i18n from "i18next"
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            hola: 'Hello Vukgram!',
        },
    },
    es: {
        translation: {
            hola: 'Hola Vukgram!',
        },
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
    escapeValue: false 
  }
});

export default i18n;