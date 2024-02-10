import React from "react";
import i18n from "i18next"; // Import i18n library
import { initReactI18next } from "react-i18next"; // Import initReactI18next function

// Import translation files for English and Russian
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

// Define resources object containing translations for each language
const resources = {
  en: {
    translation: translationEN, // English translations
  },
  ru: {
    translation: translationRU, // Russian translations
  },
};

// Initialize i18n with React
i18n.use(initReactI18next).init({
  resources, // Pass resources object
  lng: "en", // Default language is English
  fallbackLng: "en", // Fallback language is also English
  interpolation: {
    escapeValue: false, // Disable escaping for HTML characters
  },
});

// Create context for language change
export const I18nContext = React.createContext();

export default i18n; // Export initialized i18n object
