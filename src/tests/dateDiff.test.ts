import { dateDiff } from "../";

describe("dateDiff function", () => {
  test("should calculate the difference between two dates including seconds", () => {
    const result = dateDiff(new Date("12/12/2012"), new Date("11/29/2023"));
    expect(result).toEqual({
      short: "4004d",
      full: "4004 day(s), 0 hours, 0 minutes, 0 seconds",
      days: 4004,
      hours: 0,
      medium: "4004d, 0hrs, 0mins, 0s",
      minutes: 0,
      seconds: 0,
    });
  });

  test("should handle same dates", () => {
    const result = dateDiff(new Date("12/12/2012"), new Date("12/12/2012"));
    expect(result).toEqual({
      short: "",
      full: "0 day(s), 0 hours, 0 minutes, 0 seconds",
      days: 0,
      hours: 0,
      medium: "0d, 0hrs, 0mins, 0s",
      minutes: 0,
      seconds: 0,
    });
  });

  test("should handle negative difference", () => {
    const result = dateDiff(new Date("12/12/2012"), new Date("12/10/2012"), false);
    expect(result).toEqual({
      short: "2d",
      full: "2 day(s), 0 hours, 0 minutes, 0 seconds",
      days: 2,
      hours: 0,
      medium: "2d, 0hrs, 0mins, 0s",
      minutes: 0,
      seconds: 0,
    });
  });

  test("should calculate the difference including minutes", () => {
    const result = dateDiff(new Date("12/12/2012 12:00:00"), new Date("12/12/2012 13:45:00"));
    console.log("file: dateDiff.test.ts:45  result", result);
    expect(result).toEqual({
      short: "1h 45m",
      full: "0 day(s), 1 hours, 45 minutes, 0 seconds",
      days: 0,
      hours: 1,
      medium: "0d, 1hrs, 45mins, 0s",
      minutes: 45,
      seconds: 0,
    });
  });

  test("should calculate the difference including seconds", () => {
    const result = dateDiff(new Date("12/12/2012 12:00:00"), new Date("12/12/2012 12:00:30"));
    expect(result).toEqual({
      short: "30s",
      full: "0 day(s), 0 hours, 0 minutes, 30 seconds",
      days: 0,
      hours: 0,
      medium: "0d, 0hrs, 0mins, 30s",
      minutes: 0,
      seconds: 30,
    });
  });
});
