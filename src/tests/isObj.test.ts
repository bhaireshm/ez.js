import { isObj } from "../";

describe("isObj function", () => {
  test("should return true for a non-empty object", () => {
    expect(isObj({})).toBe(true);
    expect(isObj(Object({}))).toBe(true);
    expect(isObj({ a: "b" })).toBe(true);
    expect(isObj({ a: 0 })).toBe(true);
    expect(isObj(Object(0))).toBe(true);
    expect(isObj(Object("a"))).toBe(true);

    expect(isObj(() => {})).toBe(true);
    expect(isObj([1, 2, 3])).toBe(true);
    expect(isObj(new Date())).toBe(true);
    expect(isObj(new Error())).toBe(true);

    expect(isObj(/a/)).toBe(true);
  });

  test("should return false for an empty object", () => {
    expect(isObj("not an object")).toBe(false);
    expect(isObj(12)).toBe(false);
    expect(isObj(true)).toBe(false);
  });
});
