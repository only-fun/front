import {
  translations,
  type TextKey,
  texts,
  type TranslatedLanguages,
} from "./ui";

export function useTranslations(url: URL) {
  const translatedLang = (() => {
    const [, lang] = url.pathname
      .replace(import.meta.env.BASE_URL, "")
      .split("/");

    if (lang in translations) return lang as TranslatedLanguages;

    return null;
  })();

  const translated = translatedLang ? translations[translatedLang] || {} : {};

  return function t(key: TextKey): string {
    return translated[key] || texts[key];
  };
}
