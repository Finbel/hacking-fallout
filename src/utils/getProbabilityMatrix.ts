import { getLikeness } from "./getLikeness";

export const getProbabilityMatrix = (words: string[]) => {
  const probabilitysMatrix: Record<string, number[]> = {};
  words.forEach((word1) => {
    probabilitysMatrix[word1] = [];
    for (let i = 0; i <= word1.length; i++) {
      const probability = words.filter(
        (word2) => getLikeness(word1, word2) === i
      ).length;
      probabilitysMatrix[word1].push(probability / words.length);
    }
  });
  return probabilitysMatrix;
};
