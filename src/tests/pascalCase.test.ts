import pascalCase from "../helpers/pascalCase";

describe("pascalCase", () => {
  it("should convert a string to PascalCase", () => {
    expect(pascalCase("hello world")).toBe("HelloWorld");
  });

  it("should remove special characters and convert to PascalCase if removeSpecialChars is true", () => {
    expect(pascalCase("hello-world!", true)).toBe("HelloWorld");
  });

  it("should handle an empty string", () => {
    expect(pascalCase("")).toBe("");
  });

  it("should handle a single-word string", () => {
    expect(pascalCase("test")).toBe("Test");
  });

  it("should handle a string with leading and trailing spaces", () => {
    expect(pascalCase("  leading and trailing spaces  ", true)).toBe("LeadingAndTrailingSpaces");
  });
});
