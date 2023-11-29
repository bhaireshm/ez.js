import isNum from "../helpers/isNum";

describe("isNum function", () => {
  test("should return true for a number", () => {
    const numberInput = 123;
    expect(isNum(numberInput)).toBe(true);
  });

  test("should return false for a non-empty string representation of a number", () => {
    const stringNumber = "123";
    expect(isNum(stringNumber)).toBe(false);
  });

  test("should return false for a non-empty string that is not a number", () => {
    const nonNumericString = "abc";
    expect(isNum(nonNumericString)).toBe(false);
  });

  test("should return false for an empty string", () => {
    const emptyString = "";
    expect(isNum(emptyString)).toBe(false);
  });

  test("should return false for null", () => {
    const nullInput = null;
    expect(isNum(nullInput)).toBe(false);
  });

  test("should return false for undefined", () => {
    const undefinedInput = undefined;
    expect(isNum(undefinedInput)).toBe(false);
  });

  test("should return false for a boolean input", () => {
    const booleanInput = true;
    expect(isNum(booleanInput)).toBe(false);
  });

  test("should return false for an object input", () => {
    const objectInput = { key: "value" };
    expect(isNum(objectInput)).toBe(false);
  });

  test("should return false for an array input", () => {
    const arrayInput = [1, 2, 3];
    expect(isNum(arrayInput)).toBe(false);
  });
});
