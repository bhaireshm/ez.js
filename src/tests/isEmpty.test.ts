import isEmpty from "../helpers/isEmpty";

describe("isEmpty function", () => {
  test("should return true for an empty string", () => {
    const result = isEmpty("");
    expect(result).toBe(true);
  });

  test("should return true for a null value", () => {
    const result = isEmpty(null);
    expect(result).toBe(true);
  });

  test("should return true for an empty array", () => {
    const result = isEmpty([]);
    expect(result).toBe(true);
  });

  test("should return true for an empty object", () => {
    const result = isEmpty({});
    expect(result).toBe(true);
  });

  test("should return false for a non-empty string", () => {
    const result = isEmpty("non-empty");
    expect(result).toBe(false);
  });

  test("should return false for a number", () => {
    const result = isEmpty(42);
    expect(result).toBe(false);
  });

  test("should return false for a boolean value", () => {
    const result = isEmpty(true);
    expect(result).toBe(false);
  });

  test("should return false for a non-empty array", () => {
    const result = isEmpty([1, 2, 3]);
    expect(result).toBe(false);
  });

  test("should return false for a non-empty object", () => {
    const result = isEmpty({ key: "value" });
    expect(result).toBe(false);
  });
});
