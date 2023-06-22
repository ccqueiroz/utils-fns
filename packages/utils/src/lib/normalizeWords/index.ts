/**
 * @function normalizeWords: Remove accents from words
 * @param text
 * @returns string
 */
export const normalizeWords = (text: string) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
