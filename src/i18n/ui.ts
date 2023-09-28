export const languages = {
  en: "English",
  pl: "Polski",
};

export const defaultLang = "en";

export const texts = {
  "page.chosen-language": "Chosen language",
};

export type TextKey = keyof typeof texts;

export type TranslatedLanguages = Exclude<
  keyof typeof languages,
  typeof defaultLang
>;

export const translations: Record<
  TranslatedLanguages,
  Partial<typeof texts>
> = {
  pl: {
    "page.chosen-language": "Wybrany język",
  },
} as const;
