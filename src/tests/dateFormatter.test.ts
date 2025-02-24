import { DateFormatter } from "../date";

describe("DateFormatter", () => {
  it("should format a date in the default format", () => {
    const date = new Date("2022-07-25T14:30:00.000Z");
    const formatter = new DateFormatter(date);
    expect(formatter.format()).toBe("Mon Jul 25 2022 20:00:00");
  });

  it("should format a date in a custom format", () => {
    const date = new Date("2022-07-25T14:30:00.000Z");
    const formatter = new DateFormatter(date);
    expect(formatter.format("yyyy-MM-dd HH:mm:ss")).toBe("2022-07-25 20:00:00"); // Current local time
  });

  it("should handle UTC dates", () => {
    const date = new Date("2022-07-25T14:30:00.000Z");
    const formatter = new DateFormatter(date);
    expect(formatter.format("yyyy-MM-dd HH:mm:ss", { utc: true })).toBe("2022-07-25 14:30:00");
  });

  it("should handle GMT dates", () => {
    const date = new Date("2022-07-25T14:30:00.000Z");
    const formatter = new DateFormatter(date);
    expect(formatter.format("yyyy-MM-dd HH:mm:ss Z", { gmt: true })).toBe(
      "2022-07-25 20:00:00 GMT",
    );
  });

  it("should handle timezone offsets", () => {
    const date = new Date("2022-07-25T14:30:00.000Z");
    const formatter = new DateFormatter(date);
    // Test with +60 minutes offset (1 hour ahead)
    expect(formatter.format("yyyy-MM-dd HH:mm:ss", { timezoneOffset: 60 })).toBe(
      "2022-07-25 15:30:00",
    );

    // Test with -60 minutes offset (1 hour behind)
    expect(formatter.format("yyyy-MM-dd HH:mm:ss", { timezoneOffset: -60 })).toBe(
      "2022-07-25 13:30:00",
    );
  });

  it("should handle invalid dates", () => {
    // Test with invalid string
    const invalidStringDate = new DateFormatter("invalid date");
    expect(() => invalidStringDate.format()).toThrow("Invalid date");

    // Test with invalid Date object
    const invalidDate = new DateFormatter(new Date("invalid"));
    expect(() => invalidDate.format()).toThrow("Invalid date");
  });

  it("should format a date with a suffix", () => {
    const date = new Date("2022-07-25T14:30:00.000Z");
    const formatter = new DateFormatter(date);
    expect(formatter.format("dddd, MMMM d, yyyy")).toBe("Monday, July 25, 2022");
  });

  it("should format a date with a time suffix", () => {
    const date = new Date("2022-07-25T14:30:00.000Z");
    const formatter = new DateFormatter(date);
    expect(formatter.format("h:mm:ss TT")).toBe("8:00:00 PM");
  });
});
