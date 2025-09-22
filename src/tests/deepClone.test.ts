import { deepClone } from "../object";

describe("deepClone", () => {
  test("should deep clone primitive values", () => {
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
    expect(deepClone(123)).toBe(123);
    expect(deepClone("hello")).toBe("hello");
    expect(deepClone(true)).toBe(true);
  });

  test("should deep clone a simple object", () => {
    const obj = { a: 1, b: "test" };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test("should deep clone a nested object", () => {
    const obj = { a: 1, b: { c: 2, d: "nested" } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  test("should deep clone an array", () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test("should deep clone an array of objects", () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[0]).not.toBe(arr[0]);
    expect(clonedArr[1]).not.toBe(arr[1]);
  });

  test("should deep clone Date objects", () => {
    const date = new Date();
    const obj = { a: date };
    const clonedObj = deepClone(obj);
    expect(clonedObj.a).toEqual(date);
    expect(clonedObj.a).not.toBe(date);
  });

  test("should deep clone RegExp objects", () => {
    const regex = /abc/gi;
    const obj = { a: regex };
    const clonedObj = deepClone(obj);
    expect(clonedObj.a).toEqual(regex);
    expect(clonedObj.a).not.toBe(regex);
  });

  test("should handle circular references", () => {
    const obj: any = {};
    obj.a = obj;
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a).toBe(clonedObj); // Should point to itself
  });

  test("should handle complex nested circular references", () => {
    const obj1: any = {};
    const obj2: any = {};
    obj1.a = obj2;
    obj2.b = obj1;
    const clonedObj1 = deepClone(obj1);
    expect(clonedObj1).toEqual(obj1);
    expect(clonedObj1).not.toBe(obj1);
    expect(clonedObj1.a).not.toBe(obj1.a);
    expect(clonedObj1.a.b).toBe(clonedObj1);
  });

  test("should deep clone objects with null and undefined values", () => {
    const obj = { a: 1, b: null, c: undefined, d: { e: null } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test("should deep clone an object with mixed types", () => {
    const obj = {
      str: "hello",
      num: 123,
      bool: true,
      arr: [1, { x: 10 }],
      date: new Date(),
      regex: /test/,
      nested: { a: 1, b: [2, 3] },
    };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.arr).not.toBe(obj.arr);
    expect(clonedObj.arr[1]).not.toBe(obj.arr[1]);
    expect(clonedObj.date).not.toBe(obj.date);
    expect(clonedObj.regex).not.toBe(obj.regex);
    expect(clonedObj.nested).not.toBe(obj.nested);
  });
});
