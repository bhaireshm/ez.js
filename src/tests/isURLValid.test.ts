import { isURLValid } from "../";

describe("isURLValid function", () => {
  test("should return true for a valid URL with https", () => {
    const result = isURLValid("https://www.example.com");
    expect(result).toBe(true);
  });

  test("should return true for a valid URL with http", () => {
    const result = isURLValid("http://www.example.com");
    expect(result).toBe(true);
  });

  test("should return true for a valid IP address", () => {
    const result = isURLValid("http://192.168.0.1");
    expect(result).toBe(true);
  });

  test("should return false for an invalid URL", () => {
    const result = isURLValid("not_a_valid_url");
    expect(result).toBe(false);
  });

  test("should return false for an empty string", () => {
    const result = isURLValid("");
    expect(result).toBe(false);
  });
});
