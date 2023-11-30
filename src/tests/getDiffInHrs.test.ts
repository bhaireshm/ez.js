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

  // test('should handle undefined start date', () => {
  //   const endDate = new Date('2023-07-10T18:45:00.000Z');
  //   const result = getDiffInHrs(undefined, endDate);
  //   expect(result).toEqual(NaN); // Invalid input, returns NaN
  // });

  // test('should handle undefined end date', () => {
  //   const startDate = new Date('2023-07-07T08:30:00.000Z');
  //   const result = getDiffInHrs(startDate, undefined);
  //   expect(result).toEqual(NaN); // Invalid input, returns NaN
  // });

  // test('should handle undefined start and end dates', () => {
  //   const result = getDiffInHrs(undefined, undefined);
  //   expect(result).toEqual(NaN); // Invalid input, returns NaN
  // });

  // test('should handle invalid start and end dates', () => {
  //   const result = getDiffInHrs('invalidStartDate', 'invalidEndDate' as any);
  //   expect(result).toEqual(NaN); // Invalid input, returns NaN
  // });
});
