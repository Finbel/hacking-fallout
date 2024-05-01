export const getLikeness = (word1: string, word2: string): number => {
  let likeness = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) {
      likeness++;
    }
  }
  return likeness;
};
