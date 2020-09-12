export const ROUTES = {
  home: '/',
  signin: '/signin',
  signup: '/signup',
};

export const REDIRECTS = {
  USER_SIGN_UP: ROUTES.home,
  USER_SIGN_IN: ROUTES.home,
};

export const AVAILABLE_LANGUAGES = [
  {
    lang: 'en',
    name: 'EN',
  },
  {
    lang: 'ru',
    name: 'RU',
  },
  {
    lang: 'pl',
    name: 'PL',
  },
];

export const LOCAL_STORAGE_KEYS = {
  theme: 'theme',
};

export const ALLOWED_IMAGE_EXTENSIONS = ['png', 'jpeg', 'jpg'];
