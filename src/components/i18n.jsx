import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import ruTranslation from "./locales/ru.json";
import engTranslation from "./locales/eng.json";
import uzTranslation from "./locales/uz.json";
import polishTranslation from "./locales/polish.json";

const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: language, // Default til
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      eng: { translation: engTranslation },
      polish: { translation: polishTranslation },
    },
  });

export default i18n;
