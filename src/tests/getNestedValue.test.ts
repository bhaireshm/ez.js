import { getNestedValue } from "../";

describe("getNestedValue", () => {
  const data = {
    user: {
      name: "John",
      address: {
        city: "New York",
        zip: "10001",
      },
    },
    products: ["Laptop", "Phone", "Tablet"],
  };

  test("returns nested value for valid keys", () => {
    const result = getNestedValue(data, "user.name");
    expect(result).toBe("John");
  });

  test("returns null for empty keys", () => {
    const result = getNestedValue(data, "");
    expect(result).toBeNull();
  });

  test("returns null for non-existent keys", () => {
    const result = getNestedValue(data, "user.age");
    expect(result).toBeNull();
  });

  test("returns nested array value for valid keys", () => {
    const result = getNestedValue(data, "products.1");
    expect(result).toBe("Phone");
  });

  test("returns null for undefined object", () => {
    const result = getNestedValue(undefined, "user.name");
    expect(result).toBeNull();
  });
});
