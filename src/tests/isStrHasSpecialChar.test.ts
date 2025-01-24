import { isStrHasSpecialChar } from "../";

describe("isStrHasSpecialChar function", () => {
  it("should return true with default pattern and special character", () => {
    const str = "hello@world";
    expect(isStrHasSpecialChar(str)).toBe(true);
  });

  it("should return false with default pattern and no special character", () => {
    const str = "helloworld";
    expect(isStrHasSpecialChar(str)).toBe(false);
  });

  it("should return true with custom string pattern and matching special character", () => {
    const str = "hello@world";
    const pattern = "@";
    expect(isStrHasSpecialChar(str, pattern)).toBe(true);
  });

  it("should return false with custom string pattern and non-matching special character", () => {
    const str = "hello@world";
    const pattern = "#";
    expect(isStrHasSpecialChar(str, pattern)).toBe(false);
  });

  it("should return true with custom RegExp pattern and matching special character", () => {
    const str = "hello@world";
    const pattern = /@/;
    expect(isStrHasSpecialChar(str, pattern)).toBe(true);
  });

  it("should return false with custom RegExp pattern and non-matching special character", () => {
    const str = "hello@world";
    const pattern = /#/;
    expect(isStrHasSpecialChar(str, pattern)).toBe(false);
  });

  it("should return false with empty string", () => {
    const str = "";
    expect(isStrHasSpecialChar(str)).toBe(false);
  });
});
