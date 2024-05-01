import { expect, test } from "vitest";
import { getEliminatesMatrix } from "../getEliminatesMatrix";
import { mockWords } from "../../constants/mockData.ts/words2";

// LIKENESS MATRIX

//         LOUD   THUG   LONG   HIDE   FRAG   DIED
//   LOUD  4      1      2      0      0      1
//   THUG  1      4      1      0      1      0
//   LONG  2      1      4      0      1      0
//   HIDE  0      0      0      4      0      1
//   FRAG  0      1      1      0      4      0
//   DIED  1      0      0      1      0      4

// ELIMINIATION MATRIX
//         0      1      2      3      4
//   LOUD  4      4      5      0      5
//   THUG  4      3      0      0      5
//   LONG  4      4      5      0      5
//   HIDE  2      5      0      0      5
//   FRAG  3      4      0      0      5
//   DIED  3      4      0      0      5

test("should return the correct eliminates matrix", () => {
  const expected = {
    LOUD: [4, 4, 5, 0, 5],
    THUG: [4, 3, 0, 0, 5],
    LONG: [4, 4, 5, 0, 5],
    HIDE: [2, 5, 0, 0, 5],
    FRAG: [3, 4, 0, 0, 5],
    DIED: [3, 4, 0, 0, 5],
  };
  expect(getEliminatesMatrix(mockWords)).toEqual(expected);
});
