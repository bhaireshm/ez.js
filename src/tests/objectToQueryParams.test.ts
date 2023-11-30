import objectToQueryParams from "../helpers/objectToQueryParams";

describe("objectToQueryParams function", () => {
  test("should convert an object into a query string", () => {
    const inputObject = { name: "John", age: 25, city: "New York" };
    const result = objectToQueryParams(inputObject);
    const expected = "name=John&age=25&city=New%20York";
    expect(result).toEqual(expected);
  });

  test("should handle an empty object", () => {
    const result = objectToQueryParams({});
    const expected = "";
    expect(result).toEqual(expected);
  });

  test("should handle an object with one key-value pair", () => {
    const inputObject = { key: "value" };
    const result = objectToQueryParams(inputObject);
    const expected = "key=value";
    expect(result).toEqual(expected);
  });

  test("should handle special characters in key-value pairs", () => {
    const inputObject = { name: "John Doe", location: "New York, NY" };
    const result = objectToQueryParams(inputObject);
    const expected = "name=John%20Doe&location=New%20York%2C%20NY";
    expect(result).toEqual(expected);
  });

  test("should handle numeric values in key-value pairs", () => {
    const inputObject = { id: 123, quantity: 5 };
    const result = objectToQueryParams(inputObject);
    const expected = "id=123&quantity=5";
    expect(result).toEqual(expected);
  });
});
