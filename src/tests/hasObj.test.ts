import { hasObj } from "../";

describe("hasObj function", () => {
  it("should return true for an array of objects with matching data", () => {
    const objArr = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    const data = { id: 1, name: "John" };
    expect(hasObj(objArr, data)).toBe(true);
  });

  it("should return false for an array of objects with non-matching data", () => {
    const objArr = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    const data = { id: 3, name: "Bob" };
    expect(hasObj(objArr, data)).toBe(false);
  });

  it("should return false for an empty array", () => {
    const objArr: any[] = [];
    const data = { id: 1, name: "John" };
    expect(hasObj(objArr, data)).toBe(false);
  });

  it("should return the matching object when returnType is true", () => {
    const objArr = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    const data = { id: 1, name: "John" };
    expect(hasObj(objArr, data, true)).toEqual({ id: 1, name: "John" });
  });

  it("should return false when returnType is false", () => {
    const objArr = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    const data = { id: 3, name: "Bob" };
    expect(hasObj(objArr, data, false)).toBe(false);
  });

  it("should return false for an object containing null values", () => {
    const objArr = [
      { id: 1, name: null },
      { id: 2, name: "Jane" },
    ];
    const data = { id: 1, name: "John" };
    expect(hasObj(objArr, data)).toBe(false);
  });
});
