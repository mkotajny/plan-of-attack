import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import { i18nextPlugin } from 'translation-check';

import translationEN from './translations/en/translation.json';
import translationPL from './translations/pl/translation.json';

// the translations
const resources = {
  en: { translation: translationEN },
  pl: { translation: translationPL },
};

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .use(i18nextPlugin)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
