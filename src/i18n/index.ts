import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { FALLBACK_LANG } from '../constants';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: FALLBACK_LANG,
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
