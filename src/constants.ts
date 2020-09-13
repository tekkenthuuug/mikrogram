export const ROUTES = {
  home: '/',
  signin: '/signin',
  signup: '/signup',
  post: '/p',
  profile: '/profile',
};

export const REDIRECTS = {
  USER_SIGN_UP: ROUTES.home,
  USER_SIGN_IN: ROUTES.home,
};

export const FALLBACK_LANG = 'en';

export const AVAILABLE_LANGUAGES = {
  en: {
    name: 'EN',
  },
  ru: {
    name: 'RU',
  },
  pl: {
    name: 'PL',
  },
};

export const LOCAL_STORAGE_KEYS = {
  theme: 'theme',
};

export const ALLOWED_IMAGE_EXTENSIONS = ['png', 'jpeg', 'jpg'];
