import { shortenString } from "../";

describe("shortenString function", () => {
  test("should not shorten string if length is less than or equal to specified length", () => {
    expect(shortenString("hello", 10)).toBe("hello");
    expect(shortenString("world", 5)).toBe("world");
  });

  test("should shorten string if length is greater than specified length", () => {
    expect(shortenString("This is a long string", 10)).toBe("This is a ");
    expect(shortenString("Another long example", 7)).toBe("Another");
  });

  test("should default to a maximum length of 50 if not provided", () => {
    const longString =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    expect(shortenString(longString)).toHaveLength(50);
  });
});
