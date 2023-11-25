import checkObject from "../helpers/checkObject";

describe("checkObject function", () => {
  test("should return true for an empty object", () => {
    const data = {};
    const result = checkObject(data);
    expect(result).toBe(true);
  });

  test("should return true for non-empty values when no keys are provided", () => {
    const data = {
      id: 2,
      name: "John",
      address: { city: "Bangalore" },
    };
    const result = checkObject(data);
    expect(result).toBe(true);
  });

  test("should return false for a specified key with an empty value", () => {
    const data = {
      id: 2,
      name: "",
      address: { city: "Bangalore" },
    };
    const result = checkObject(data, ["name"]);
    expect(result).toBe(false);
  });

  test("should return false for a nested specified key with an empty value", () => {
    const data = {
      id: 2,
      name: "John",
      address: { city: "" },
    };
    const result = checkObject(data, ["address.city"]);
    expect(result).toBe(false);
  });

  test("should return true for specified keys with non-empty values", () => {
    const data = {
      id: 2,
      name: "John",
      address: { city: "Bangalore" },
    };
    const result = checkObject(data, ["id", "name", "address.city"]);
    expect(result).toBe(true);
  });
});
