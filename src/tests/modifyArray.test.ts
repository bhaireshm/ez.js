import { modifyArray } from "../";

describe("modifyArray function", () => {
  test("should add an element to the array", () => {
    const inputArray = [1, 2, 3];
    const elementToAdd = 4;
    const result = modifyArray(inputArray, elementToAdd);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("should not add a duplicate element to the array", () => {
    const inputArray = [1, 2, 3];
    const elementToAdd = 3;
    const result = modifyArray(inputArray, elementToAdd);
    expect(result).toEqual([1, 2, 3]);
  });

  test("should remove an element from the array", () => {
    const inputArray = [1, 2, 3];
    const elementToRemove = 2;
    const result = modifyArray(inputArray, undefined, elementToRemove);
    expect(result).toEqual([1, 3]);
  });

  test("should handle adding and removing elements simultaneously", () => {
    const inputArray = [1, 2, 3];
    const elementToAdd = 4;
    const elementToRemove = 2;
    const result = modifyArray(inputArray, elementToAdd, elementToRemove);
    expect(result).toEqual([1, 3, 4]);
  });

  test("should handle an empty array", () => {
    const inputArray: any[] = [];
    const elementToAdd = 1;
    const result = modifyArray(inputArray, elementToAdd);
    expect(result).toEqual([1]);
  });

  test("should handle undefined elementToAdd", () => {
    const inputArray = [1, 2, 3];
    const result = modifyArray(inputArray, undefined);
    expect(result).toEqual([1, 2, 3]);
  });
});
