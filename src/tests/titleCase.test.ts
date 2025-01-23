import { titleCase } from "../";

describe("titleCase function", () => {
  test("should return empty string for empty input", () => {
    expect(titleCase("")).toBe("");
  });

  test("should capitalize the first letter of each word", () => {
    expect(titleCase("hello world")).toBe("HelloWorld");
    expect(titleCase("foo bar baz")).toBe("FooBarBaz");
  });

  test("should handle already capitalized words", () => {
    expect(titleCase("Hello World")).toBe("HelloWorld");
    expect(titleCase("Foo Bar Baz")).toBe("FooBarBaz");
  });

  test("should handle leading and trailing spaces", () => {
    expect(titleCase("  hello world  ")).toBe("HelloWorld");
    expect(titleCase("  foo bar baz  ")).toBe("FooBarBaz");
  });

  test("should handle special characters", () => {
    expect(titleCase("hello-world")).toBe("Hello-world");
    expect(titleCase("foo_bar_baz")).toBe("Foo_bar_baz");
  });
});
