import arrayIntoChunks from "../helpers/arrayIntoChunks";

describe("arrayIntoChunks", () => {
  test("splits array into chunks of size 2", () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const chunkSize = 2;
    const result = arrayIntoChunks(inputArray, chunkSize);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("splits array into chunks of size 2 for odd number of elements", () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunkSize = 2;
    const result = arrayIntoChunks(inputArray, chunkSize);
    expect(result).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  test("splits array into chunks of size 3", () => {
    const inputArray = ["a", "b", "c", "d", "e", "f"];
    const chunkSize = 3;
    const result = arrayIntoChunks(inputArray, chunkSize);
    expect(result).toEqual([
      ["a", "b", "c"],
      ["d", "e", "f"],
    ]);
  });

  test("returns an empty array for empty input array", () => {
    const inputArray: number[] = [];
    const chunkSize = 2;
    const result = arrayIntoChunks(inputArray, chunkSize);
    expect(result).toEqual([]);
  });

  test("returns an empty array for invalid chunk size", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const chunkSize = 0;
    const result = arrayIntoChunks(inputArray, chunkSize);
    expect(result).toEqual([]);
  });

  test("returns the original array for chunk size equal to array length", () => {
    const inputArray = ["x", "y", "z"];
    const chunkSize = 3;
    const result = arrayIntoChunks(inputArray, chunkSize);
    expect(result).toEqual([["x", "y", "z"]]);
  });

  test("returns an empty array for negative chunk size", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const chunkSize = -2;
    const result = arrayIntoChunks(inputArray, chunkSize);
    expect(result).toEqual([]);
  });

  test("returns single-element arrays for chunk size 1", () => {
    const inputArray = ["a", "b", "c"];
    const chunkSize = 1;
    const result = arrayIntoChunks<string>(inputArray, chunkSize);
    expect(result).toEqual([["a"], ["b"], ["c"]]);
  });

  test("handles floating-point chunk size by rounding down", () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const chunkSize = 2.5;
    const result = arrayIntoChunks(inputArray, chunkSize);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });
});
