import { getLikeness } from "./getLikeness";

const getEliminates = (likneness: number, word: string, words: string[]) => {
  const eliminates = words.filter(
    (word2) => getLikeness(word, word2) !== likneness
  ).length;
  return eliminates === words.length ? 0 : eliminates;
};

const getProbability = (likneness: number, word: string, words: string[]) => {
  const probability = words.filter(
    (word2) => getLikeness(word, word2) === likneness
  ).length;
  return probability / words.length;
};

export const getExpectedEliminations = (words: string[]) => {
  const expectedEliminationMatrix: Record<string, number> = {};
  words.forEach((word1) => {
    const expectedEliminationList: number[] = [];
    for (let i = 0; i < word1.length; i++) {
      const eliminates = getEliminates(i, word1, words);
      const probability = getProbability(i, word1, words);
      expectedEliminationList.push(eliminates * probability);
    }
    expectedEliminationMatrix[word1] = expectedEliminationList.reduce(
      (acc, cur) => acc + cur,
      0
    );
  });
  return expectedEliminationMatrix;
};
