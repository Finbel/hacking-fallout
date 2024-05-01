import { getEliminatesMatrix } from "./getEliminatesMatrix";
import { getProbabilityMatrix } from "./getProbabilityMatrix";

export const getExpectedElimination = (words: string[]) => {
  const eliminatesMatrix = getEliminatesMatrix(words);
  const probabilityMatrix = getProbabilityMatrix(words);

  return Object.fromEntries(
    words.map((word) => {
      const eliminates = eliminatesMatrix[word];
      const probability = probabilityMatrix[word];
      const expectedElimination = eliminates.reduce(
        (acc, eliminate, index) => acc + eliminate * probability[index],
        0
      );
      return [word, expectedElimination];
    })
  );
};
