export const PATH = {
  ROOT: '/',
  QUIZ: '/meme/quiz',
  MEME_DETAIL: (memeId?: string) => `/meme/${memeId ?? ':memeId'}`,
} as const;
