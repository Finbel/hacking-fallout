import { getLikeness } from "./getLikeness";

const getEliminates = (likneness: number, word: string, words: string[]) => {
  const eliminates = words.filter(
    (word2) => getLikeness(word, word2) !== likneness
  ).length;
  return eliminates === words.length ? 0 : eliminates;
};

export const getEliminatesMatrix = (words: string[]) => {
  const eliminatesMatrix: Record<string, number[]> = {};
  words.forEach((word1) => {
    eliminatesMatrix[word1] = [];
    for (let i = 0; i <= word1.length; i++) {
      const eliminates = getEliminates(i, word1, words);
      eliminatesMatrix[word1].push(
        eliminates === words.length ? 0 : eliminates
      );
    }
  });
  return eliminatesMatrix;
};
