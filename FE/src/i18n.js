import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './i18next/en/en.json';
import translationsHE from './i18next/he/he.json';
import translationsAR from './i18next/ar/ar.json';

const resources = {
  en: {
    translation: translationsEN
  },
  he: {
    translation: translationsHE
  },
  ar: {
    translation: translationsAR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en', // default language
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
  
  export default i18n;