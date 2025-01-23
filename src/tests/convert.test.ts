import { strToNum, toNumber } from "../";

describe("toNumber function", () => {
  test("should convert a valid number string to a number", () => {
    const result = toNumber("-23.32");
    expect(result).toBe(-23.32);
  });

  test("should return the input string if it is not a valid number", () => {
    const result = toNumber("abc", true);
    expect(result).toBe("abc");
  });

  test("should log a warning and return an empty string for an invalid number string", () => {
    const spy = jest.spyOn(console, "warn").mockImplementation(() => {});
    const result = toNumber("abc");
    expect(result).toBe("");
    expect(spy).toHaveBeenCalledWith("abc NaN");
    spy.mockRestore();
  });
});

describe("strToNum function", () => {
  test("should convert an array of valid number strings to an array of numbers", () => {
    const input = ["3", "4", 3, "7", 8];
    const result = strToNum(input, []);
    expect(result).toEqual([3, 4, 3, 7, 8]);
  });

  test("should convert specified values in an object to numbers", () => {
    const input = { a: 2, b: "4", c: "5" };
    const keysToConvert = ["c", "b"];
    const result = strToNum(input, keysToConvert);
    expect(result).toEqual({ a: 2, b: 4, c: 5 });
  });

  test("should not convert values in an object when no keys are specified", () => {
    const input = { a: 2, b: "4", c: "5" };
    const result = strToNum(input, []);
    expect(result).toEqual({ a: 2, b: "4", c: "5" });
  });
});
