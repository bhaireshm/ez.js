import { toCamelCase } from "../";

describe("toCamelCase", () => {
  test("converts a sentence to camel case", () => {
    const input = "hello world";
    const result = toCamelCase(input);
    expect(result).toBe("helloWorld");
  });

  test("handles leading and trailing whitespaces", () => {
    const input = "  leading and trailing  ";
    const result = toCamelCase(input);
    expect(result).toBe("leadingAndTrailing");
  });

  test("converts a single word to camel case", () => {
    const input = "single";
    const result = toCamelCase(input);
    expect(result).toBe("single");
  });

  test("handles consecutive whitespaces", () => {
    const input = "multiple   spaces";
    const result = toCamelCase(input);
    expect(result).toBe("multipleSpaces");
  });
});
