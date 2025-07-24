import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import enJson from './translations/en.json';
import jpJson from './translations/jp.json';

i18n.use(initReactI18next).init({

  fallbackLng: 'jp',
  interpolation: {
    escapeValue: false
  },
  resources: {
    jp: jpJson,
    en: enJson,
  }

})

export default i18n;