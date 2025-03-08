import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        EN: {
            translation: {
                home: 'Home',
                about: 'About Me',
                compare: 'Compare',
                welcome: 'Welcome to PAYCHECK.FYI'
            }
        },
        TW: {
            translation: {
                home: '首頁',
                about: '關於我們',
                compare: '比較',
                welcome: '歡迎來到 PAYCHECK.FYI'
            }
        }
    },
    lng: 'EN', // Default language
    fallbackLng: 'EN', // Fallback if language is not available
    interpolation: { escapeValue: false }
});

export default i18n;
