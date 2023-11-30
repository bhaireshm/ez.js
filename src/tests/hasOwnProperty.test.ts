import hasOwnProperty from "../helpers/hasOwnProperty";

describe("hasOwnProperty function", () => {
  test("should return true for existing keys in the object", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = "a,b";
    const result = hasOwnProperty(obj, keys, true);
    expect(result).toBe(true);
  });

  test('should return "d not found" for a non-existing key in the object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = "a,d";
    const result = hasOwnProperty(obj, keys);
    expect(result).toBe("d not found");
  });

  test('should return "All key(s) found" for all existing keys in the object when returnType is false', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = "a,b,c";
    const result = hasOwnProperty(obj, keys);
    expect(result).toBe("All key(s) found");
  });

  test("should return true for all existing keys in the object when returnType is true", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = "a,b,c";
    const result = hasOwnProperty(obj, keys, true);
    expect(result).toBe(true);
  });

  test("should return false for an empty object", () => {
    const obj = {};
    const keys = "a,b,c";
    const result = hasOwnProperty(obj, keys, true);
    expect(result).toBe(false);
  });

  test('should return "false" for an empty object when returnType is false', () => {
    const obj = {};
    const keys = "a,b,c";
    const result = hasOwnProperty(obj, keys, false);
    expect(result).toBe("false");
  });

  test("should return false for an empty keys string", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = "";
    const result = hasOwnProperty(obj, keys, true);
    expect(result).toBe(false);
  });

  test('should return "false" for an empty keys string when returnType is false', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = "";
    const result = hasOwnProperty(obj, keys);
    expect(result).toBe("false");
  });

  test('should handle nested objects and return "All key(s) found"', () => {
    const obj = { a: { b: 2 }, c: { d: 3 } };
    const keys = "a.b,c.d";
    const result = hasOwnProperty(obj, keys);
    expect(result).toBe("All key(s) found");
  });

  test("should handle nested objects and return true when returnType is true", () => {
    const obj = { a: { b: 2 }, c: { d: 3 } };
    const keys = "a.b,c.d";
    const result = hasOwnProperty(obj, keys, true);
    expect(result).toBe(true);
  });

  test('should handle nested objects and return "e not found"', () => {
    const obj = { a: { b: 2 }, c: { d: 3 } };
    const keys = "a.b,c.e";
    const result = hasOwnProperty(obj, keys);
    expect(result).toBe("c.e not found");
  });
});
