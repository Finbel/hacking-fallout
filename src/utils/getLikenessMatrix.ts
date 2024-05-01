import { getLikeness } from "./getLikeness";

export const getLikenessMatrix = (
  words: string[]
): Record<string, Record<string, number>> => {
  const matrix: Record<string, Record<string, number>> = {};

  words.forEach((word1) => {
    matrix[word1] = {};
    words.forEach((word2) => {
      matrix[word1][word2] = getLikeness(word1, word2);
    });
  });

  return matrix;
};
