/**
 * Calculates the difference in hours between two provided dates.
 *
 * @param {Date} from - The starting date.
 * @param {Date} to - The ending date.
 * @returns {number} The difference in hours between the two dates.
 *
 * @example
 * console.log(getDiffInHrs(new Date("12/12/2012"), new Date()));
 */
function getDiffInHrs(from, to) {
  return Math.floor(Math.abs((new Date(from) - new Date(to)) / 36e5));
}

module.exports = getDiffInHrs;
