import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en',
    resources: {
        br: {
            translations: require('../locales/br/translations.json')
        },
        en: {
            translations: require('../locales/en/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false,
    },
    react: {
        wait: true,
    },
});

i18next.languages = ['pt-br', 'en'];

export default i18next;