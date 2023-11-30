import getDates from "../helpers/getDates";

describe("getDates function", () => {
  test("should return an array of dates between the start and end dates", () => {
    const startDate = new Date("2023-07-07");
    const endDate = new Date("2023-07-10");
    const result = getDates(startDate, endDate);
    const expected = [
      new Date("2023-07-07T00:00:00.000Z"),
      new Date("2023-07-08T00:00:00.000Z"),
      new Date("2023-07-09T00:00:00.000Z"),
      new Date("2023-07-10T00:00:00.000Z"),
    ];
    expect(result).toEqual(expected);
  });

  test("should handle the same start and end dates", () => {
    const startDate = new Date("2023-07-07");
    const endDate = new Date("2023-07-07");
    const result = getDates(startDate, endDate);
    const expected = [new Date("2023-07-07T00:00:00.000Z")];
    expect(result).toEqual(expected);
  });

  // test('should handle undefined start date', () => {
  //   const endDate = new Date('2023-07-10');
  //   const result = getDates(undefined, endDate);
  //   expect(result).toEqual([]);
  // });

  // test('should handle undefined end date', () => {
  //   const startDate = new Date('2023-07-07');
  //   const result = getDates(startDate, undefined);
  //   expect(result).toEqual([]);
  // });

  // test('should handle undefined start and end dates', () => {
  //   const result = getDates(undefined, undefined);
  //   expect(result).toEqual([]);
  // });

  // test('should handle invalid start and end dates', () => {
  //   const result = getDates('invalidStartDate', 'invalidEndDate' as any);
  //   expect(result).toEqual([]);
  // });
});
