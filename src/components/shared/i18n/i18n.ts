import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from './location/en.json'
import ru from './location/ru.json'
import ua from './location/ua.json'

const resources = {
  en: {
    translation: en
  },
  ua: {
    translation: ua
  },
  ru: {
    translation: ru
  }
}

export default i18next.use(initReactI18next).init({
  debug: true,
  lng: "en",
  resources
});