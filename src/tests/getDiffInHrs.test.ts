import getDiffInHrs from "../helpers/getDiffInHrs";

describe("getDiffInHrs function", () => {
  test("should return the difference in hours between two dates", () => {
    const startDate = new Date("2023-07-07T12:00:00.000Z");
    const endDate = new Date("2023-07-08T14:30:00.000Z");
    const result = getDiffInHrs(startDate, endDate);
    const expected = 26; // 26 hours between the two dates
    expect(result).toEqual(expected);
  });

  test("should handle the same start and end dates", () => {
    const startDate = new Date("2023-07-07T12:00:00.000Z");
    const endDate = new Date("2023-07-07T12:00:00.000Z");
    const result = getDiffInHrs(startDate, endDate);
    const expected = 0; // 0 hours between the same date
    expect(result).toEqual(expected);
  });
});
