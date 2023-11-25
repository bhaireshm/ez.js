import compareObject from "../helpers/compareObjects";

describe("compareObject function", () => {
  test("should return true for identical objects", () => {
    const obj1 = { a: 2, b: "hello", c: { d: 42 } };
    const obj2 = { a: 2, b: "hello", c: { d: 42 } };
    const result = compareObject(obj1, obj2);
    expect(result).toBe(true);
  });

  test("should return true for nested identical objects", () => {
    const obj1 = { a: { b: 2, c: "world" }, d: true };
    const obj2 = { a: { b: 2, c: "world" }, d: true };
    const result = compareObject(obj1, obj2);
    expect(result).toBe(true);
  });

  test("should return false for objects with different values", () => {
    const obj1 = { a: 2, b: "hello", c: { d: 42 } };
    const obj2 = { a: 2, b: "hi", c: { d: 42 } };
    const result = compareObject(obj1, obj2);
    expect(result).toBe(false);
  });

  test("should return false for objects with different nested values", () => {
    const obj1 = { a: { b: 2, c: "world" }, d: true };
    const obj2 = { a: { b: 2, c: "earth" }, d: true };
    const result = compareObject(obj1, obj2);
    expect(result).toBe(false);
  });

  test("should return false for objects with different keys", () => {
    const obj1 = { a: 2, b: "hello", c: { d: 42 } };
    const obj2 = { a: 2, b: "hello", d: { e: 42 } };
    const result = compareObject(obj1, obj2);
    expect(result).toBe(false);
  });

  test("should return false for objects with different nested keys", () => {
    const obj1 = { a: { b: 2, c: "world" }, d: true };
    const obj2 = { a: { b: 2, e: "earth" }, d: true };
    const result = compareObject(obj1, obj2);
    expect(result).toBe(false);
  });

  test("should return true for empty objects", () => {
    const obj1 = {};
    const obj2 = {};
    const result = compareObject(obj1, obj2);
    expect(result).toBe(true);
  });
});
