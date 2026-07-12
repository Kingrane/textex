// lib/i18n.ts

type Locale = 'ru' | 'en';

type TranslationKeys = {
  // Header
  textMode: string;
  textModeLabel: string;
  fileMode: string;
  fileModeLabel: string;
  lightTheme: string;
  darkTheme: string;
  lightThemeLabel: string;
  darkThemeLabel: string;
  info: string;
  infoLabel: string;

  // Tabs
  share: string;
  getCode: string;

  // Share mode
  randomCode: string;
  customCode: string;
  codePlaceholder: string;
  textPlaceholder: string;
  fileLabel: string;
  selectFile: string;
  dropHere: string;
  fileName: string;
  shareButton: string;
  shareLoading: string;
  yourCode: string;
  copied: string;
  copy: string;
  deleteNotice: string;

  // Get mode
  codeInputPlaceholder: string;
  getButton: string;
  getLoading: string;
  yourText: string;
  plain: string;
  highlight: string;
  copiedText: string;

  // About modal
  aboutTitle: string;
  aboutDesc1: string;
  aboutDesc2: string;
  close: string;

  // Navigation / footer / content pages
  navAbout: string;
  navFaq: string;
  navPrivacy: string;
  navContacts: string;
  footerNavLabel: string;
  footerNote: string;
  backHome: string;

  // How it works (home)
  howTitle: string;
  howLead: string;
  howStep1Title: string;
  howStep1Body: string;
  howStep2Title: string;
  howStep2Body: string;
  howStep3Title: string;
  howStep3Body: string;
  howLimits: string;

  // Page titles
  aboutPageTitle: string;
  faqPageTitle: string;
  privacyPageTitle: string;
  contactsPageTitle: string;
  contactsIntro: string;
  contactsGithub: string;
  contactsGithubHint: string;
  contactsEmailHint: string;

  // Errors
  fileReadError: string;
  fileReadFailed: string;
  fileTooBig: string;
  fileReadErrorShort: string;
  selectFileFirst: string;
  textEmpty: string;
  shareFailed: string;
  unknownError: string;
  codeEmpty: string;
  textNotFound: string;
  // API errors
  apiTextRequired: string;
  apiTextTooLarge: string;
  apiInvalidCode: string;
  apiServerError: string;
  apiCodeNotProvided: string;
  apiTextNotFound: string;
  apiServerErrorGet: string;
};

const translations: Record<Locale, TranslationKeys> = {
  ru: {
    textMode: 'Текст',
    textModeLabel: 'Режим текста',
    fileMode: 'Файлы',
    fileModeLabel: 'Режим файлов',
    lightTheme: 'Светлая тема',
    darkTheme: 'Темная тема',
    lightThemeLabel: 'Включить светлую тему',
    darkThemeLabel: 'Включить темную тему',
    info: 'Инфо',
    infoLabel: 'О сервисе',

    share: 'Поделиться',
    getCode: 'Получить',

    randomCode: 'Случайный код',
    customCode: 'Свой код',
    codePlaceholder: 'Код (4-10 символов)',
    textPlaceholder: 'Введите ваш текст здесь...',
    fileLabel: 'Выбери текстовый файл (до 20KB)',
    selectFile: 'Выбрать файл',
    dropHere: 'Отпусти файл здесь',
    fileName: 'Файл',
    shareButton: 'Поделиться',
    shareLoading: 'Создание ссылки...',
    yourCode: 'Ваш код',
    copied: 'OK',
    copy: 'Копировать',
    deleteNotice: 'Текст будет удален через 10 минут.',

    codeInputPlaceholder: 'Введите код для получения текста',
    getButton: 'Получить текст',
    getLoading: 'Загрузка...',
    yourText: 'Ваш текст',
    plain: 'Обычный',
    highlight: 'Подсветка',
    copiedText: 'Скопировано!',

    aboutTitle: 'О сервисе',
    aboutDesc1: 'qtxt - анонимный обменник текстом и маленькими файлами по короткому коду.',
    aboutDesc2: 'Данные хранятся временно и автоматически удаляются через 10 минут.',
    close: 'Закрыть',

    navAbout: 'О сервисе',
    navFaq: 'FAQ',
    navPrivacy: 'Конфиденциальность',
    navContacts: 'Контакты',
    footerNavLabel: 'Разделы сайта',
    footerNote: 'qtxt · qqtxt.me · текст живёт 10 минут · без регистрации',
    backHome: 'На главную',

    howTitle: 'Как это работает',
    howLead: 'Три шага — и текст у другого человека или на другом устройстве.',
    howStep1Title: 'Вставь текст',
    howStep1Body: 'Напиши текст или загрузи текстовый файл до 20 KB.',
    howStep2Title: 'Получи код',
    howStep2Body: 'Случайный или свой короткий код — скопируй и передай.',
    howStep3Title: 'Открой по коду',
    howStep3Body: 'На вкладке «Получить» введи код — текст появится на экране.',
    howLimits: 'Текст удаляется через 10 минут. Аккаунт не нужен. Паролей нет.',

    aboutPageTitle: 'О сервисе',
    faqPageTitle: 'Частые вопросы',
    privacyPageTitle: 'Политика конфиденциальности',
    contactsPageTitle: 'Контакты',
    contactsIntro:
      'Связаться с автором проекта можно через GitHub. Это основной канал для багов, идей и вопросов о сервисе.',
    contactsGithub: 'Открыть GitHub',
    contactsGithubHint: 'Репозиторий, issues и обсуждения',
    contactsEmailHint: 'Отдельный email-ящик пока не указан — пишите issue на GitHub.',

    fileReadError: 'Не удалось прочитать файл как текст',
    fileReadFailed: 'Ошибка чтения файла',
    fileTooBig: 'Файл слишком большой. Максимум 20KB.',
    fileReadErrorShort: 'Не удалось прочитать файл',
    selectFileFirst: 'Сначала выбери файл :P',
    textEmpty: 'Текст не может быть пустым :P',
    shareFailed: 'Не удалось поделиться текстом :/',
    unknownError: 'Неизвестная ошибка',
    codeEmpty: 'Код не может быть пустым :P',
    textNotFound: 'Текст не найден или устарел :(',
    apiTextRequired: 'Текст обязателен',
    apiTextTooLarge: 'Слишком большой текст. Максимум 20KB.',
    apiInvalidCode: 'Код должен быть 4-10 символов (a-z, A-Z, 0-9, _, -)',
    apiServerError: 'Внутренняя ошибка сервера',
    apiCodeNotProvided: 'Код не предоставлен :/',
    apiTextNotFound: 'Текст не найден или устарел :(',
    apiServerErrorGet: 'Внутренняя ошибка сервера >:(',
  },
  en: {
    textMode: 'Text',
    textModeLabel: 'Text mode',
    fileMode: 'Files',
    fileModeLabel: 'File mode',
    lightTheme: 'Light theme',
    darkTheme: 'Dark theme',
    lightThemeLabel: 'Enable light theme',
    darkThemeLabel: 'Enable dark theme',
    info: 'Info',
    infoLabel: 'About',

    share: 'Share',
    getCode: 'Get',

    randomCode: 'Random code',
    customCode: 'Custom code',
    codePlaceholder: 'Code (4-10 characters)',
    textPlaceholder: 'Enter your text here...',
    fileLabel: 'Choose a text file (up to 20KB)',
    selectFile: 'Choose file',
    dropHere: 'Drop file here',
    fileName: 'File',
    shareButton: 'Share',
    shareLoading: 'Creating link...',
    yourCode: 'Your code',
    copied: 'OK',
    copy: 'Copy',
    deleteNotice: 'Text will be deleted in 10 minutes.',

    codeInputPlaceholder: 'Enter code to get text',
    getButton: 'Get text',
    getLoading: 'Loading...',
    yourText: 'Your text',
    plain: 'Plain',
    highlight: 'Highlight',
    copiedText: 'Copied!',

    aboutTitle: 'About',
    aboutDesc1: 'qtxt - anonymous text and small file sharing by short code.',
    aboutDesc2: 'Data is stored temporarily and automatically deleted after 10 minutes.',
    close: 'Close',

    navAbout: 'About',
    navFaq: 'FAQ',
    navPrivacy: 'Privacy',
    navContacts: 'Contacts',
    footerNavLabel: 'Site sections',
    footerNote: 'qtxt · qqtxt.me · text lasts 10 minutes · no sign-up',
    backHome: 'Home',

    howTitle: 'How it works',
    howLead: 'Three steps — text on another device or for another person.',
    howStep1Title: 'Paste text',
    howStep1Body: 'Type text or upload a text file up to 20 KB.',
    howStep2Title: 'Get a code',
    howStep2Body: 'Random or custom short code — copy and share it.',
    howStep3Title: 'Open by code',
    howStep3Body: 'On Get, enter the code — the text appears on screen.',
    howLimits: 'Text is deleted after 10 minutes. No account. No passwords.',

    aboutPageTitle: 'About',
    faqPageTitle: 'FAQ',
    privacyPageTitle: 'Privacy policy',
    contactsPageTitle: 'Contacts',
    contactsIntro:
      'Reach the project author via GitHub. That is the main channel for bugs, ideas, and service questions.',
    contactsGithub: 'Open GitHub',
    contactsGithubHint: 'Repository, issues, and discussion',
    contactsEmailHint: 'No separate public email yet — please open a GitHub issue.',

    fileReadError: 'Failed to read file as text',
    fileReadFailed: 'File read error',
    fileTooBig: 'File is too large. Maximum 20KB.',
    fileReadErrorShort: 'Failed to read file',
    selectFileFirst: 'Select a file first :P',
    textEmpty: 'Text cannot be empty :P',
    shareFailed: 'Failed to share text :/',
    unknownError: 'Unknown error',
    codeEmpty: 'Code cannot be empty :P',
    textNotFound: 'Text not found or expired :(',
    apiTextRequired: 'Text is required',
    apiTextTooLarge: 'Text is too large. Maximum 20KB.',
    apiInvalidCode: 'Code must be 4-10 characters (a-z, A-Z, 0-9, _, -)',
    apiServerError: 'Internal server error',
    apiCodeNotProvided: 'Code not provided :/',
    apiTextNotFound: 'Text not found or expired :(',
    apiServerErrorGet: 'Internal server error >:(',
  },
};

export function getLocale(): Locale {
  if (typeof window === 'undefined') return 'ru';
  const lang = navigator.language || 'ru';
  return lang.startsWith('ru') ? 'ru' : 'en';
}

export function t(key: TranslationKeys[keyof TranslationKeys]): string {
  return key;
}

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}

const apiErrorMap: Record<string, keyof TranslationKeys> = {
  TEXT_REQUIRED: 'apiTextRequired',
  TEXT_TOO_LARGE: 'apiTextTooLarge',
  INVALID_CODE: 'apiInvalidCode',
  SERVER_ERROR: 'apiServerError',
  CODE_NOT_PROVIDED: 'apiCodeNotProvided',
  TEXT_NOT_FOUND: 'apiTextNotFound',
  SERVER_ERROR_GET: 'apiServerErrorGet',
};

export function translateApiError(errorKey: string, t: TranslationKeys): string {
  const key = apiErrorMap[errorKey];
  return key ? t[key] : errorKey;
}

export type { Locale, TranslationKeys };
