import isStr from "../helpers/isStr";

describe("isStr function", () => {
  test("should return true for a string value", () => {
    const stringValue = "Hello, world!";
    expect(isStr(stringValue)).toBe(true);
  });

  test("should return false for a number value", () => {
    const numberValue = 42;
    expect(isStr(numberValue)).toBe(false);
  });

  test("should return false for a boolean value", () => {
    const booleanValue = true;
    expect(isStr(booleanValue)).toBe(false);
  });

  test("should return false for an array", () => {
    const arrayValue = [1, 2, 3];
    expect(isStr(arrayValue)).toBe(false);
  });

  test("should return false for an object", () => {
    const objectValue = { key: "value" };
    expect(isStr(objectValue)).toBe(false);
  });

  test("should return false for null", () => {
    const nullValue = null;
    expect(isStr(nullValue)).toBe(false);
  });

  test("should return false for undefined", () => {
    const undefinedValue = undefined;
    expect(isStr(undefinedValue)).toBe(false);
  });

  test("should return false for NaN", () => {
    const nanValue = NaN;
    expect(isStr(nanValue)).toBe(false);
  });

  test("should return false for an empty string", () => {
    const emptyStringValue = "";
    expect(isStr(emptyStringValue)).toBe(false);
  });

  test("should return false for an object with toString method returning a string", () => {
    const customObject = {
      toString: () => "Custom toString method",
    };
    expect(isStr(customObject)).toBe(false);
  });

  test("should return false for an object with valueOf method returning a string", () => {
    const customObject = {
      valueOf: () => "Custom valueOf method",
    };
    expect(isStr(customObject)).toBe(false);
  });
});
