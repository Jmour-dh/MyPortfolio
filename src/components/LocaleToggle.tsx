import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LocaleToggle() {
  const { t, i18n } = useTranslation();

  const toggleLocale = () => {
    const newLocale = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLocale);
  };

  return (
    <button
      onClick={toggleLocale}
      className="locale-btn"
      aria-label={
        i18n.language === "fr"
          ? t("localeToggle.switchToEnglish")
          : t("localeToggle.switchToFrench")
      }
    >
      <Languages size={14} />
      <span>{i18n.language === "fr" ? "EN" : "FR"}</span>
    </button>
  );
}