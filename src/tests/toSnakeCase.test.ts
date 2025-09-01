import toSnakeCase from "../string/toSnakeCase";

describe("toSnakeCase function", () => {
  test("converts camelCase to snake_case", () => {
    const result = toSnakeCase("camelCaseString");
    expect(result).toBe("camel_case_string");
  });

  test("converts PascalCase to snake_case", () => {
    const result = toSnakeCase("PascalCaseString");
    expect(result).toBe("pascal_case_string");
  });

  test("handles empty string", () => {
    const result = toSnakeCase("");
    expect(result).toBe("");
  });

  test("handles already snake_case string", () => {
    const result = toSnakeCase("already_snake_case");
    expect(result).toBe("already_snake_case");
  });

  test("handles single character string", () => {
    const result = toSnakeCase("A");
    expect(result).toBe("a");
  });

  test("handles string with spaces", () => {
    const result = toSnakeCase("String with Spaces");
    expect(result).toBe("string_with_spaces");
  });

  test("handles string with multiple spaces", () => {
    const result = toSnakeCase("String   with   Multiple   Spaces");
    expect(result).toBe("string_with_multiple_spaces");
  });

  test("handles string with leading/trailing spaces", () => {
    const result = toSnakeCase("  Leading and Trailing  ");
    expect(result).toBe("leading_and_trailing");
  });

  test("handles string with numbers", () => {
    const result = toSnakeCase("stringWith1Number");
    expect(result).toBe("string_with_1_number");
  });

  test("handles string with special characters", () => {
    const result = toSnakeCase("string-with_special!chars");
    expect(result).toBe("string_with_special_chars");
  });
});
