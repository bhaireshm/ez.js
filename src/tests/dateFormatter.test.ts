import { DateFormatter } from "../";

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

  // TODO: impl
  // it('should handle timezone offsets', () => {
  //   const date = new Date('2022-07-25T14:30:00.000Z');
  //   const formatter = new DateFormatter(date);
  //   expect(formatter.format('yyyy-MM-dd HH:mm:ss', { timezoneOffset: 1000 * 60 * 60 })).toBe('2022-07-25 15:30:00');
  // });
  // it('should handle invalid dates', () => {
  //   const date = new Date(' invalid date ');
  //   const formatter = new DateFormatter(date);
  //   expect(formatter.format()).toBe('Invalid date');
  // });

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
