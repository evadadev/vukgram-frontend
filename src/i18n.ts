import i18n from "i18next"
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            hola: 'Hello Vukgram!',
            usuario: 'User name',
            homeH1: 'Happy reading,',
            home2H1: 'dear reader!!',
            bienvenida: "Welcome to our readers' corner! Here you will find a space dedicated to the passion for books, where you can discover new readings, share your opinions and connect with other literature lovers. We hope you enjoy your stay and find your next great literary adventure!",
            leer: 'Start reading ->',
            popular: 'Popular now',
        },
    },
    es: {
        translation: {
            hola: 'Hola Vukgram!',
            usuario: 'Nombre usuario',
            homeH1: 'Feliz lectura,',
            home2H1: 'querido lector!!',
            bienvenida: '¡Bienvenidos a nuestro rincón de lectores! Aquí encontrarás un espacio dedicado a la pasión por los libros, donde podrás descubrir nuevas lecturas, compartir tus opiniones y conectarte con otros amantes de la literatura. ¡Esperamos que disfrutes tu estancia y encuentres tu próxima gran aventura literaria!',
            leer: 'Empezar la lectura ->',
            popular: 'Popular ahora',
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