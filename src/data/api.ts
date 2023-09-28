import type { JokesResponse, Language } from "../types";

const API_URL = "https://only-fun.github.io/db/";

export const getAvailableLanguages = async (): Promise<Language[]> => {
  const response = await fetch(`${API_URL}languages.json`);

  const languages: Language[] = await response.json();

  return languages;
};

export const getJokesForLanguage = async (
  language: Language
): Promise<JokesResponse> => {
  const response = await fetch(`${API_URL}${language.file}`);

  return response.json();
};
