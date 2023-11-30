import shuffleString from "../helpers/shuffleString";

describe("shuffleString function", () => {
  test("should shuffle characters of the input string", () => {
    const inputString = "abcdef";
    const shuffledString = shuffleString(inputString);
    expect(shuffledString).not.toBe(inputString);
    expect(shuffledString.split("").sort().join("")).toBe(inputString.split("").sort().join(""));
  });

  test("should handle empty string input", () => {
    expect(shuffleString("")).toBe("");
  });

  test("should handle strings with spaces", () => {
    const inputString = "hello world";
    const shuffledString = shuffleString(inputString);
    expect(shuffledString).not.toBe(inputString);
    expect(shuffledString.includes(" ")).toBeFalsy();
  });
});
