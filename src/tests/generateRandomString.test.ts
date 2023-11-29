import generateRandomString from "../helpers/generateRandomString";

describe("generateRandomString function", () => {
  test("should generate a random string with default length", () => {
    const result = generateRandomString();
    expect(result).toHaveLength(13);
  });

  test("should generate a random string with specified length", () => {
    const result = generateRandomString(8);
    expect(result).toHaveLength(8);
  });

  test("should generate a unique random string", () => {
    const result1 = generateRandomString(10);
    const result2 = generateRandomString(10);
    expect(result1).not.toEqual(result2);
  });

  test("should generate a random string with alphanumeric characters", () => {
    const result = generateRandomString(15);
    expect(result).toMatch(/^[a-zA-Z0-9]+$/);
  });
});
