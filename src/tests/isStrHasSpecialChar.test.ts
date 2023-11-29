import isStrHasSpecialChar from "../helpers/isStrHasSpecialChar";

describe("isStrHasSpecialChar function", () => {
  test("should return true if the string contains a special character", () => {
    const str = "hello h@rry";
    expect(isStrHasSpecialChar(str)).toBe(true);
  });

  test("should return true if the string contains a special character from the custom pattern", () => {
    const str = "hello h@rry";
    const customPattern = "@%$";
    expect(isStrHasSpecialChar(str, customPattern)).toBe(true);
  });

  test("should return false if the string does not contain a special character", () => {
    const str = "hello world";
    expect(isStrHasSpecialChar(str)).toBe(false);
  });

  test("should return false for an empty string", () => {
    const str = "";
    expect(isStrHasSpecialChar(str)).toBe(false);
  });

  test("should return false for an empty pattern", () => {
    const str = "hello world";
    const emptyPattern = "";
    expect(isStrHasSpecialChar(str, emptyPattern)).toBe(false);
  });
});
