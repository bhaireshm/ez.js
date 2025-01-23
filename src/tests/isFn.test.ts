import { isFn } from "../";

describe("isFn", () => {
  it("returns true for function values", () => {
    expect(isFn(() => {})).toBe(true);
    expect(isFn(function () {})).toBe(true);
    expect(isFn(async () => {})).toBe(true);
    expect(isFn(function* () {})).toBe(true);
    expect(isFn(function test() {})).toBe(true);
    expect(isFn(class MyClass {})).toBe(true);
  });

  it("returns false for non-function values", () => {
    expect(isFn("")).toBe(false);
    expect(isFn(123)).toBe(false);
    expect(isFn(true)).toBe(false);
    expect(isFn(false)).toBe(false);
    expect(isFn(null)).toBe(false);
    expect(isFn(undefined)).toBe(false);
    expect(isFn({})).toBe(false);
    expect(isFn([])).toBe(false);
    expect(isFn(new Date())).toBe(false);
    expect(isFn(/regex/)).toBe(false);
  });
});
