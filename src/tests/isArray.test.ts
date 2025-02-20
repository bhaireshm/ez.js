import { isArray } from "../";

describe("isArray", () => {
  it("returns true for arrays", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(new Array())).toBe(true);
  });

  it("returns false for non-array values", () => {
    expect(isArray("")).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(() => {})).toBe(false);
    expect(isArray(new Map())).toBe(false);
    expect(isArray(new Set())).toBe(false);
  });

  it("returns false for non-array objects", () => {
    expect(isArray({ key: "value" })).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(/regex/)).toBe(false);
    expect(isArray(new Error())).toBe(false);
  });
});
