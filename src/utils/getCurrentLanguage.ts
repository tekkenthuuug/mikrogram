// eslint-disable-next-line
import { i18n } from 'i18next';
import { AVAILABLE_LANGUAGES, FALLBACK_LANG } from '../constants';

const getLanguage = (i18n: i18n) => {
  const { language } = i18n;

  if (!(language in AVAILABLE_LANGUAGES)) {
    return FALLBACK_LANG;
  }

  return language;
};

export default getLanguage;
