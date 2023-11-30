import toPascalCase from "../helpers/toPascalCase";

describe("toPascalCase", () => {
  it("should convert a string to PascalCase", () => {
    expect(toPascalCase("hello world")).toBe("HelloWorld");
  });

  it("should remove special characters and convert to PascalCase if removeSpecialChars is true", () => {
    expect(toPascalCase("hello-world!", true)).toBe("HelloWorld");
  });

  it("should handle an empty string", () => {
    expect(toPascalCase("")).toBe("");
  });

  it("should handle a single-word string", () => {
    expect(toPascalCase("test")).toBe("Test");
  });

  it("should handle a string with leading and trailing spaces", () => {
    expect(toPascalCase("  leading and trailing spaces  ", true)).toBe("LeadingAndTrailingSpaces");
  });
});
