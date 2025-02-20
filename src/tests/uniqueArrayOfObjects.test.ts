import { uniqueArrayOfObjects } from "../";

describe("uniqueArrayOfObjects function", () => {
  test("should return an array with unique objects", () => {
    const input = [{ a: 2 }, { a: 2 }];
    const result = uniqueArrayOfObjects(input);
    expect(result).toEqual([{ a: 2 }]);
  });

  test("should handle nested objects and return an array with unique objects", () => {
    const input = [{ a: { b: 2 } }, { a: { b: 2 } }];
    const result = uniqueArrayOfObjects(input);
    expect(result).toEqual([{ a: { b: 2 } }]);
  });

  test("should return the original array if all objects are unique", () => {
    const input = [{ a: 2 }, { a: 2, b: 3 }];
    const result = uniqueArrayOfObjects(input);
    expect(result).toEqual(input);
  });

  test("should handle empty array and return an empty array", () => {
    const input: object[] = [];
    const result = uniqueArrayOfObjects(input);
    expect(result).toEqual([]);
  });
});
