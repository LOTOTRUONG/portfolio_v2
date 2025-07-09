import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../data/locales/en.json";
import fr from "../data/locales/fr.json";
import vi from "../data/locales/vi.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            vi: { translation: vi },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

export default i18n;
