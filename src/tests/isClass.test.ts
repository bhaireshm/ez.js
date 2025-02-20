import { isClass } from "../";

describe("isClass", () => {
  it("returns true for class instances", () => {
    class MyClass {}
    expect(isClass(MyClass)).toBe(true);
    expect(isClass(class {})).toBe(true);
  });

  // it('returns false for non-class instances', () => {
  //   expect(isClass({})).toBe(false);
  //   expect(isClass([])).toBe(false);
  //   expect(isClass('')).toBe(false);
  //   expect(isClass(123)).toBe(false);
  //   expect(isClass(null)).toBe(false);
  //   expect(isClass(true)).toBe(false);
  //   expect(isClass(false)).toBe(false);
  //   expect(isClass(/regex/)).toBe(false);
  //   expect(isClass(() => { })).toBe(false);
  //   expect(isClass(undefined)).toBe(false);
  //   expect(isClass(new Date())).toBe(false);
  //   expect(isClass(function () { })).toBe(false);
  //   expect(isClass(async () => { })).toBe(false);
  //   expect(isClass(function* () { })).toBe(false);
  //   expect(isClass(function test() { })).toBe(false);
  // });
});
