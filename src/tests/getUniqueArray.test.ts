import { getUniqueArray } from "../";

describe("getUniqueArray function", () => {
  test("should return an array with unique elements", () => {
    const inputArray = [1, 2, 3, 4, 1, 2, 5];
    const result = getUniqueArray(inputArray);
    const expected = [1, 2, 3, 4, 5];
    expect(result).toEqual(expected);
  });

  test("should handle an empty array", () => {
    const result = getUniqueArray([]);
    const expected: number[] = [];
    expect(result).toEqual(expected);
  });

  test("should handle an array with all unique elements", () => {
    const inputArray = ["apple", "banana", "orange"];
    const result = getUniqueArray(inputArray);
    const expected = ["apple", "banana", "orange"];
    expect(result).toEqual(expected);
  });

  test("should handle an array with duplicate elements", () => {
    const inputArray = ["apple", "banana", "apple", "orange", "banana"];
    const result = getUniqueArray(inputArray);
    const expected = ["apple", "banana", "orange"];
    expect(result).toEqual(expected);
  });

  test("should handle an array of mixed data types", () => {
    const inputArray = [1, "apple", 2, "banana", "apple", "orange", 3, "banana"];
    const result = getUniqueArray(inputArray);
    const expected = [1, "apple", 2, "banana", "orange", 3];
    expect(result).toEqual(expected);
  });
});
