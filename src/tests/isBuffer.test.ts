import { isBuffer } from "../helpers";

describe("isBuffer function", () => {
  it("returns true for a Buffer object", () => {
    const buffer = Buffer.from("Hello, world!");
    expect(isBuffer(buffer)).toBe(true);
  });

  it("returns false for a non-Buffer object", () => {
    const obj = { foo: "bar" };
    expect(isBuffer(obj)).toBe(false);
  });

  it("returns false for null and undefined values", () => {
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
  });

  it("returns false for primitive types", () => {
    expect(isBuffer(42)).toBe(false);
    expect(isBuffer("hello")).toBe(false);
    expect(isBuffer(true)).toBe(false);
  });
});
