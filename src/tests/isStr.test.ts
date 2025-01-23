import { isStr } from "../";

describe("isStr function", () => {
  it("should return true for string values", () => {
    expect(isStr("Hello, world!")).toBe(true);
  });

  it("should return false for non-string values", () => {
    expect(isStr(42)).toBe(false);
    expect(isStr(true)).toBe(false);
    expect(isStr([1, 2, 3])).toBe(false);
    expect(isStr({ key: "value" })).toBe(false);
    expect(isStr(null)).toBe(false);
    expect(isStr(undefined)).toBe(false);
    expect(isStr(NaN)).toBe(false);
    expect(isStr({ toString: () => "Custom toString method" })).toBe(false);
    expect(isStr({ valueOf: () => "Custom valueOf method" })).toBe(false);
  });
});
