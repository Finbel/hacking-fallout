import { expect, test } from "vitest";
import { mockWords } from "../../constants/mockData.ts/words2";
import { getProbabilityMatrix } from "../getProbabilityMatrix";

// LIKENESS MATRIX

//         LOUD   THUG   LONG   HIDE   FRAG   DIED
//   LOUD  4      1      2      0      0      1
//   THUG  1      4      1      0      1      0
//   LONG  2      1      4      0      1      0
//   HIDE  0      0      0      4      0      1
//   FRAG  0      1      1      0      4      0
//   DIED  1      0      0      1      0      4

// PROBABILITY MATRIX
//         0      1      2      3      4
//   LOUD  2/6    2/6    1/6    0      1/6
//   THUG  2/6    3/6    0      0      1/6
//   LONG  2/6    2/6    1/6    0      1/6
//   HIDE  4/6    1/6    0      0      1/6
//   FRAG  3/6    2/6    0      0      1/6
//   DIED  3/6    2/6    0      0      1/6

test("should return the correct eliminates matrix", () => {
  const expected = {
    LOUD: [2 / 6, 2 / 6, 1 / 6, 0, 1 / 6],
    THUG: [2 / 6, 3 / 6, 0, 0, 1 / 6],
    LONG: [2 / 6, 2 / 6, 1 / 6, 0, 1 / 6],
    HIDE: [4 / 6, 1 / 6, 0, 0, 1 / 6],
    FRAG: [3 / 6, 2 / 6, 0, 0, 1 / 6],
    DIED: [3 / 6, 2 / 6, 0, 0, 1 / 6],
  };
  expect(getProbabilityMatrix(mockWords)).toEqual(expected);
});
