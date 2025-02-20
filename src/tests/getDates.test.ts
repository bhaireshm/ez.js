import { getDates } from "../";

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
});
