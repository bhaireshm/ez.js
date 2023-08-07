/**
 * Returns all the dates between the start date and end date, including both.
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {Date[]}
 *
 * @example
 * getDates(new Date("07-07-2023"), new Date("07-10-2023"));
 * [
    "2023-07-06T18:30:00.000Z",
    "2023-07-07T18:30:00.000Z",
    "2023-07-08T18:30:00.000Z",
    "2023-07-09T18:30:00.000Z"
  ]
 */
function getDates(startDate, endDate) {
  if (!startDate || !endDate) return [];

  startDate = new Date(startDate);
  endDate = new Date(endDate);
  const date = new Date(startDate.getTime());
  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

module.exports = getDates;