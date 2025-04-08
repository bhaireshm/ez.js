import { objectToQueryParams } from "..";

describe("objectToQueryParams function", () => {
  test("should convert an object into a query string", () => {
    const inputObject = { name: "John", age: 25, city: "New York" };
    const result = objectToQueryParams(inputObject);
    const expected = "name=%22John%22&age=25&city=%22New+York%22";
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
    const expected = "key=%22value%22";
    expect(result).toEqual(expected);
  });

  test("should handle special characters in key-value pairs", () => {
    const inputObject = { name: "John Doe", location: "New York, NY" };
    const result = objectToQueryParams(inputObject);
    const expected = "name=%22John+Doe%22&location=%22New+York%2C+NY%22";
    expect(result).toEqual(expected);
  });

  test("should handle numeric values in key-value pairs", () => {
    const inputObject = { id: 123, quantity: 5 };
    const result = objectToQueryParams(inputObject);
    const expected = "id=123&quantity=5";
    expect(result).toEqual(expected);
  });

  test("should handle nested objects", () => {
    const inputObject = {
      id: 123,
      quantity: 5,
      items: { name: "John Doe", location: "New York, NY" },
    };
    const result = objectToQueryParams(inputObject);
    const expected =
      "id=123&quantity=5&items=%7B%22name%22%3A%22John+Doe%22%2C%22location%22%3A%22New+York%2C+NY%22%7D";
    expect(result).toEqual(expected);
  });
});

// describe('queryParamsToObject', () => {
//   it('should convert a simple query string to an object', () => {
//     const qs = 'name=John&age=25';
//     const result = queryParamsToObject(qs);
//     expect(result).toEqual({ name: 'John', age: 25 });
//   });

//   it('should convert a query string with special characters to an object', () => {
//     const qs = 'name=%22John%22&age=25&city=%22New+York%22';
//     const result = queryParamsToObject(qs);
//     console.log(" result", result);
//     expect(result).toEqual({ name: 'John', age: 25, city: 'New York' });
//   });

//   it('should convert a query string with numeric values to an object', () => {
//     const qs = 'id=123&quantity=5';
//     const result = queryParamsToObject(qs);
//     expect(result).toEqual({ id: 123, quantity: 5 });
//   });

//   it('should convert a query string with nested objects to an object', () => {
//     const qs = 'id=123&quantity=5&items=%7B%22name%22%3A%22John+Doe%22%2C%22location%22%3A%22New+York%2C+NY%22%7D';
//     const result = queryParamsToObject(qs);
//     expect(result).toEqual({ id: 123, quantity: 5, items: { name: 'John Doe', location: 'New York, NY' } });
//   });

//   it('should return an empty object for an empty query string', () => {
//     const qs = '';
//     const result = queryParamsToObject(qs);
//     expect(result).toEqual({});
//   });

//   it('should throw an error for a malformed query string', () => {
//     const qs = 'name=John&age='; // missing value
//     expect(() => queryParamsToObject(qs)).toThrowError();
//   });
// });
