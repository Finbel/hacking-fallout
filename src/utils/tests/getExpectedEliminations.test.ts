import { expect, test } from "vitest";
import { mockWords } from "../../constants/mockData.ts/words2";
import { getExpectedEliminations } from "../getExpectedEliminations";

// ELIMINIATION MATRIX
//         0      1      2      3
//   LOUD  4      4      5      0
//   THUG  4      3      0      0
//   LONG  4      4      5      0
//   HIDE  2      5      0      0
//   FRAG  3      4      0      0
//   DIED  3      4      0      0

// PROBABILITY MATRIX
//         0      1      2      3
//   LOUD  2/6    2/6    1/6    0
//   THUG  2/6    3/6    0      0
//   LONG  2/6    2/6    1/6    0
//   HIDE  4/6    1/6    0      0
//   FRAG  3/6    2/6    0      0
//   DIED  3/6    2/6    0      0

// EXPECTED ELIMINATIONS
//
//   LOUD 4 * 2/6 + 4 * 2/6 + 5 * 1/6 + 0 * 0 = 3.5
//   THUG 4 * 2/6 + 3 * 3/6 + 0 * 0 + 0 * 0 = 2.83
//   LONG 4 * 2/6 + 4 * 2/6 + 5 * 1/6 + 0 * 0 = 3.5
//   HIDE 2 * 4/6 + 5 * 1/6 + 0 * 0 + 0 * 0 = 2.17
//   FRAG 3 * 3/6 + 4 * 2/6 + 0 * 0 + 0 * 0 = 2.83
//   DIED 3 * 3/6 + 4 * 2/6 + 0 * 0 + 0 * 0 = 2.83

test("should return the correct eliminates matrix", () => {
  const expected = {
    LOUD: (4 * 2) / 6 + (4 * 2) / 6 + (5 * 1) / 6 + 0 * 0,
    THUG: (4 * 2) / 6 + (3 * 3) / 6 + 0 * 0 + 0 * 0,
    LONG: (4 * 2) / 6 + (4 * 2) / 6 + (5 * 1) / 6 + 0 * 0,
    HIDE: (2 * 4) / 6 + (5 * 1) / 6 + 0 * 0 + 0 * 0,
    FRAG: (3 * 3) / 6 + (4 * 2) / 6 + 0 * 0 + 0 * 0,
    DIED: (3 * 3) / 6 + (4 * 2) / 6 + 0 * 0 + 0 * 0,
  };
  const result = getExpectedEliminations(mockWords);
  const resultStrings = Object.values<number>(result).map((r) => r.toFixed(2));
  const expectedStrings = Object.values<number>(expected).map((e) =>
    e.toFixed(2)
  );
  expect(resultStrings).toEqual(expectedStrings);
});
