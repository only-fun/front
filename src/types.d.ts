export type Language = {
  label: string;
  code: string;
  file: string;
};

export type JokesResponse = {
  jokes: Joke[];
};

export type Joke = {
  id: number;
  question: string;
  answer: string;
};
