// lib/content.ts
import type { Locale } from './i18n';

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContentSection = {
  title: string;
  body: string;
};

const faq: Record<Locale, FaqItem[]> = {
  ru: [
    {
      question: 'Что такое qtxt?',
      answer:
        'qtxt — бесплатный сервис для анонимного обмена текстом и маленькими текстовыми файлами. Вы вставляете текст, получаете короткий код и передаёте его другому человеку. Без регистрации и аккаунтов.',
    },
    {
      question: 'Как этим пользоваться?',
      answer:
        '1) Откройте вкладку «Поделиться», вставьте текст или загрузите файл. 2) Нажмите «Поделиться» и скопируйте код. 3) На другом устройстве откройте «Получить», введите код — текст появится на экране.',
    },
    {
      question: 'Сколько хранится текст?',
      answer:
        'Ровно 10 минут. После этого запись автоматически удаляется из хранилища. Срок нельзя продлить — так задумано для приватности.',
    },
    {
      question: 'Какой максимальный размер?',
      answer:
        'До 20 килобайт текста или текстового файла. Бинарные и медиафайлы не поддерживаются — только текст.',
    },
    {
      question: 'Нужна ли регистрация?',
      answer:
        'Нет. Сервис полностью анонимный: нет аккаунтов, истории кодов и счётчиков просмотров.',
    },
    {
      question: 'Можно ли поставить пароль на текст?',
      answer:
        'Нет. Защита — короткий срок жизни кода. Не передавайте код посторонним и не делитесь чувствительными данными, если это критично.',
    },
    {
      question: 'Работает ли свой код?',
      answer:
        'Да. Можно задать свой код (4–10 символов: буквы, цифры, _ и -), если он свободен. Иначе сервис сгенерирует случайный.',
    },
    {
      question: 'Это безопасно?',
      answer:
        'Текст хранится временно на сервере (Vercel KV) и удаляется через 10 минут. Мы не просим email и не ведём личные кабинеты. Подробности — в Политике конфиденциальности.',
    },
  ],
  en: [
    {
      question: 'What is qtxt?',
      answer:
        'qtxt is a free service for anonymous text and small text-file sharing. Paste text, get a short code, share the code. No sign-up, no accounts.',
    },
    {
      question: 'How do I use it?',
      answer:
        '1) Open Share, paste text or upload a file. 2) Tap Share and copy the code. 3) On another device open Get, enter the code — the text appears.',
    },
    {
      question: 'How long is text stored?',
      answer:
        'Exactly 10 minutes. Then the entry is deleted automatically. TTL is fixed on purpose for privacy.',
    },
    {
      question: 'What is the size limit?',
      answer:
        'Up to 20 KB of text or a text file. Binary and media files are not supported — text only.',
    },
    {
      question: 'Do I need an account?',
      answer:
        'No. Fully anonymous: no accounts, no code history, no view counters.',
    },
    {
      question: 'Can I password-protect text?',
      answer:
        'No. Protection is the short lifetime of the code. Do not share the code with strangers or paste highly sensitive data if that is critical for you.',
    },
    {
      question: 'Can I use a custom code?',
      answer:
        'Yes. You can set a custom code (4–10 chars: letters, digits, _, -) if it is free. Otherwise a random code is generated.',
    },
    {
      question: 'Is it safe?',
      answer:
        'Text is stored temporarily (Vercel KV) and deleted after 10 minutes. We do not ask for email or run user accounts. See the Privacy Policy for details.',
    },
  ],
};

const privacy: Record<Locale, ContentSection[]> = {
  ru: [
    {
      title: 'Кто мы',
      body:
        'qtxt (qqtxt.me) — простой веб-сервис для временного обмена текстом по короткому коду. Сервис работает без регистрации.',
    },
    {
      title: 'Какие данные обрабатываются',
      body:
        'Текст или содержимое текстового файла, которое вы сами отправляете для обмена; технически необходимый короткий код доступа; служебные логи инфраструктуры хостинга (например, IP и user-agent на стороне провайдера), которыми мы не пользуемся для профилирования пользователей.',
    },
    {
      title: 'Срок хранения',
      body:
        'Пользовательский текст хранится не более 10 минут, после чего удаляется автоматически. Мы не ведём историю ваших кодов и не считаем просмотры.',
    },
    {
      title: 'Где хранятся данные',
      body:
        'Приложение размещено на Vercel; временные записи текста — в Vercel KV (Redis-совместимое хранилище). Обработка идёт в объёме, необходимом для работы функции «поделиться / получить».',
    },
    {
      title: 'Файлы cookie и реклама',
      body:
        'Сам сервис qtxt не требует cookie для основного сценария. Если на сайте включена реклама Рекламной сети Яндекса (РСЯ), партнёр может использовать cookie и аналогичные технологии для показа и измерения рекламы. Подробности — в политике Яндекса. До одобрения и явного включения рекламы скрипты РСЯ на сайте не загружаются.',
    },
    {
      title: 'Передача третьим лицам',
      body:
        'Мы не продаём ваш текст. Текст доступен тому, кто знает код, в течение срока хранения. Инфраструктурные провайдеры (Vercel и др.) обрабатывают технические данные по своим правилам. При включённой рекламе данные о показах обрабатывает Яндекс.',
    },
    {
      title: 'Ваши действия',
      body:
        'Не размещайте персональные данные третьих лиц, секреты и материалы, распространение которых запрещено законом. По истечении 10 минут текст удаляется; до этого его может прочитать любой, у кого есть код.',
    },
    {
      title: 'Контакты',
      body:
        'По вопросам сервиса и персональных данных пишите через страницу «Контакты» или создайте issue в репозитории GitHub проекта.',
    },
  ],
  en: [
    {
      title: 'Who we are',
      body:
        'qtxt (qqtxt.me) is a simple web service for temporary text sharing via a short code. No registration required.',
    },
    {
      title: 'What data we process',
      body:
        'Text or text-file content you submit to share; a short access code; infrastructure logs from the host (e.g. IP and user-agent on the provider side) that we do not use for user profiling.',
    },
    {
      title: 'Retention',
      body:
        'User text is stored for at most 10 minutes and then deleted automatically. We do not keep your code history or view counters.',
    },
    {
      title: 'Where data is stored',
      body:
        'The app runs on Vercel; temporary text entries live in Vercel KV (Redis-compatible storage). Processing is limited to the share/get feature.',
    },
    {
      title: 'Cookies and ads',
      body:
        'qtxt itself does not require cookies for the core flow. If Yandex Advertising Network (YAN) ads are enabled, the partner may use cookies and similar tech for ad serving and measurement — see Yandex policies. Until ads are explicitly enabled after approval, YAN scripts are not loaded.',
    },
    {
      title: 'Third parties',
      body:
        'We do not sell your text. Anyone with the code can read it during the retention window. Infrastructure providers (Vercel, etc.) process technical data under their terms. If ads are on, Yandex processes ad-related data.',
    },
    {
      title: 'Your responsibilities',
      body:
        'Do not upload other people\'s personal data, secrets, or illegal material. After 10 minutes the text is gone; before that, anyone with the code can read it.',
    },
    {
      title: 'Contact',
      body:
        'For service or privacy questions use the Contacts page or open a GitHub issue in the project repository.',
    },
  ],
};

const about: Record<Locale, ContentSection[]> = {
  ru: [
    {
      title: 'Зачем нужен qtxt',
      body:
        'Иногда нужно быстро передать текст с телефона на компьютер, скинуть кусок кода коллеге или заметку другу — без мессенджеров, облаков и регистрации. qtxt даёт короткий код на 10 минут.',
    },
    {
      title: 'Как это устроено',
      body:
        'Вы отправляете текст на сервер, получаете код (случайный или свой). Другой человек вводит код и читает текст. Через 10 минут запись исчезает. Лимит — 20 KB, только текст.',
    },
    {
      title: 'Чего здесь нет (намеренно)',
      body:
        'Нет аккаунтов, паролей на тексты, истории кодов и счётчиков просмотров. Сервис намеренно простой и временный.',
    },
    {
      title: 'Открытый код',
      body:
        'Исходники проекта доступны на GitHub. Можно посмотреть, как работает API, и предложить улучшения через issues.',
    },
  ],
  en: [
    {
      title: 'Why qtxt exists',
      body:
        'Sometimes you need to move text from phone to PC, share a code snippet, or a note — without messengers, cloud drives, or sign-up. qtxt gives a short code for 10 minutes.',
    },
    {
      title: 'How it works',
      body:
        'You send text to the server and get a code (random or custom). Someone else enters the code and reads the text. After 10 minutes it is gone. Limit: 20 KB, text only.',
    },
    {
      title: 'What we deliberately omit',
      body:
        'No accounts, no passwords on texts, no code history, no view counters. The product stays simple and temporary.',
    },
    {
      title: 'Open source',
      body:
        'Source code is on GitHub. You can inspect the API and suggest improvements via issues.',
    },
  ],
};

export function getFaqItems(locale: Locale): FaqItem[] {
  return faq[locale];
}

export function getPrivacySections(locale: Locale): ContentSection[] {
  return privacy[locale];
}

export function getAboutSections(locale: Locale): ContentSection[] {
  return about[locale];
}

export const GITHUB_URL = 'https://github.com/Kingrane/qtxt';
export const SITE_URL = 'https://qqtxt.me';
