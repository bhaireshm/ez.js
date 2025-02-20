import { mergeObjects } from "../";

describe("mergeObjects function", () => {
  test("should merge two objects with unique properties", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test("should merge two objects with overlapping properties", () => {
    const obj1 = { a: 1, b: 2, c: [1, 2] };
    const obj2 = { c: [3, 4], d: 4 };
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 2, c: [1, 2, 3, 4], d: 4 });
  });

  test("should merge two objects with nested properties", () => {
    const obj1 = { a: { b: 1, c: [1, 2] } };
    const obj2 = { a: { c: [3, 4], d: 4 }, e: 5 };
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({ a: { b: 1, c: [1, 2, 3, 4], d: 4 }, e: 5 });
  });

  test("should handle empty objects", () => {
    const obj1 = {};
    const obj2 = {};
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({});
  });

  test("should handle one empty object and one non-empty object", () => {
    const obj1 = { a: 1 };
    const obj2 = {};
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({ a: 1 });
  });

  test("should handle two empty objects", () => {
    const obj1 = {};
    const obj2 = {};
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({});
  });

  test("should handle objects with null properties", () => {
    const obj1 = { a: null, b: { c: null } };
    const obj2 = { b: { d: null }, e: null };
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({ a: null, b: { c: null, d: null }, e: null });
  });

  test("should handle objects with undefined properties", () => {
    const obj1 = { a: undefined, b: { c: undefined } };
    const obj2 = { b: { d: undefined }, e: undefined };
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({ a: undefined, b: { c: undefined, d: undefined }, e: undefined });
  });

  test("should handle objects with non-plain object properties", () => {
    const date = new Date();
    const obj1 = { a: date };
    const obj2 = { b: [1, 2, 3] };
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({ a: date, b: [1, 2, 3] });
  });

  test("should handle objects with nested arrays and return unique values", () => {
    const obj1 = { a: { b: [1, 2, 3] } };
    const obj2 = { a: { b: [2, 3, 4] }, e: 5 };
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({ a: { b: [1, 2, 3, 4] }, e: 5 });
  });
});
