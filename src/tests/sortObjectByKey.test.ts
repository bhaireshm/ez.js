import { sortObjectByKey } from "../";

describe("sortObjectByKey", () => {
  const data = [
    { id: 3, name: "Alice" },
    { id: 1, name: "Bob" },
    { id: 2, name: "Charlie" },
  ];

  it("should sort objects in ascending order by default", () => {
    const result = sortObjectByKey(data, "id");
    expect(result).toEqual([
      { id: 1, name: "Bob" },
      { id: 2, name: "Charlie" },
      { id: 3, name: "Alice" },
    ]);
  });

  it("should sort objects in descending order when order is -1", () => {
    const result = sortObjectByKey(data, "id", -1);
    expect(result).toEqual([
      { id: 3, name: "Alice" },
      { id: 2, name: "Charlie" },
      { id: 1, name: "Bob" },
    ]);
  });

  it("should handle sorting by string key", () => {
    const result = sortObjectByKey(data, "name");
    expect(result).toEqual([
      { id: 3, name: "Alice" },
      { id: 1, name: "Bob" },
      { id: 2, name: "Charlie" },
    ]);
  });

  it("should handle an empty array", () => {
    const result = sortObjectByKey([], "id");
    expect(result).toEqual([]);
  });

  it("should handle an array with a single object", () => {
    const result = sortObjectByKey([{ id: 1, name: "Bob" }], "id");
    expect(result).toEqual([{ id: 1, name: "Bob" }]);
  });
});
