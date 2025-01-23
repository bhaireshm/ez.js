import dateDiff from "../helpers/date/dateDiff";

describe("dateDiff function", () => {
  test("should calculate the difference between two dates", () => {
    const result = dateDiff(new Date("12/12/2012"), new Date("11/29/2023"));
    expect(result).toEqual({
      short: "4004d",
      full: "4004 day(s) 0 hours, 0 minutes",
      days: 4004,
      hours: 0,
      minutes: 0,
    });
  });

  test("should handle same dates", () => {
    const result = dateDiff(new Date("12/12/2012"), new Date("12/12/2012"));
    expect(result).toEqual({
      short: "",
      full: "0 day(s) 0 hours, 0 minutes",
      days: 0,
      hours: 0,
      minutes: 0,
    });
  });

  test("should handle negative difference", () => {
    const result = dateDiff(new Date("12/12/2012"), new Date("12/10/2012"), false);
    expect(result).toEqual({
      short: "2d",
      full: "2 day(s) 0 hours, 0 minutes",
      days: 2,
      hours: 0,
      minutes: 0,
    });
  });
});
