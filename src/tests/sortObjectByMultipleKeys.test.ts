import { sortObjectByMultipleKeys } from "../";

describe("sortObjectByMultipleKeys", () => {
  const data = [
    { name: "John", date: "2021-01-01" },
    { name: "Alice", date: "2021-02-01" },
    { name: "Bob", date: "2021-01-15" },
  ];

  it("should sort objects by multiple keys", () => {
    const result = sortObjectByMultipleKeys(data, ["name", "-date"]);
    expect(result).toEqual([
      { name: "Alice", date: "2021-02-01" },
      { name: "Bob", date: "2021-01-15" },
      { name: "John", date: "2021-01-01" },
    ]);
  });

  it("should handle sorting by a single key", () => {
    const result = sortObjectByMultipleKeys(data, ["name"]);
    expect(result).toEqual([
      { name: "Alice", date: "2021-02-01" },
      { name: "Bob", date: "2021-01-15" },
      { name: "John", date: "2021-01-01" },
    ]);
  });

  it("should handle sorting in descending order", () => {
    const result = sortObjectByMultipleKeys(data, ["-date"]);
    expect(result).toEqual([
      { name: "Alice", date: "2021-02-01" },
      { name: "Bob", date: "2021-01-15" },
      { name: "John", date: "2021-01-01" },
    ]);
  });

  it("should handle an empty array", () => {
    const result = sortObjectByMultipleKeys([], ["name", "-date"]);
    expect(result).toEqual([]);
  });

  it("should handle an array with a single object", () => {
    const result = sortObjectByMultipleKeys(
      [{ name: "John", date: "2021-01-01" }],
      ["name", "-date"],
    );
    expect(result).toEqual([{ name: "John", date: "2021-01-01" }]);
  });

  it("should handle sorting by a non-existent key", () => {
    const result = sortObjectByMultipleKeys(data, ["nonexistentkey"]);
    expect(result).toEqual(data);
  });
});
