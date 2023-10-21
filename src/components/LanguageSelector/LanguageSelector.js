import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>Eng</button>
      <button onClick={() => changeLanguage("ru")}>Ру</button>
    </div>
  );
};

export default LanguageSelector;
