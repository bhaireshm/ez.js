import isObj from "../helpers/isObj";

describe("isObj function", () => {
  test("should return true for a non-empty object", () => {
    const obj = { name: "John", age: 25 };
    expect(isObj(obj)).toBe(true);
  });

  test("should return false for an empty object", () => {
    const emptyObj = {};
    expect(isObj(emptyObj)).toBe(false);
  });

  test("should return false for a non-object input", () => {
    const nonObject = "not an object";
    expect(isObj(nonObject)).toBe(false);
  });

  test("should return false for an array input", () => {
    const arrayInput = [1, 2, 3];
    expect(isObj(arrayInput)).toBe(false);
  });

  test("should return false for null", () => {
    const nullInput = null;
    expect(isObj(nullInput)).toBe(false);
  });

  test("should return false for undefined", () => {
    const undefinedInput = undefined;
    expect(isObj(undefinedInput)).toBe(false);
  });

  test("should return false for a number input", () => {
    const numberInput = 42;
    expect(isObj(numberInput)).toBe(false);
  });

  test("should return false for a boolean input", () => {
    const booleanInput = true;
    expect(isObj(booleanInput)).toBe(false);
  });

  test("should return false for a function input", () => {
    const functionInput = () => {};
    expect(isObj(functionInput)).toBe(false);
  });
});
