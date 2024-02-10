import { useTranslation } from "react-i18next";

// LanguageSelector Component
const LanguageSelector = () => {
  // Get translation function
  const { i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language using i18n library
  };

  return (
    // Container for language selector buttons
    <div>
      {/* Button to switch to English */}
      <button onClick={() => changeLanguage("en")}>Eng</button>
      {/* Button to switch to Russian */}
      <button onClick={() => changeLanguage("ru")}>Ру</button>
    </div>
  );
};

export default LanguageSelector;
