/**
 * Calculates the difference between provided two dates.
 *
 * @param {Date} from
 * @param {Date} to
 *
 * @example
 * console.log(getDiffInHrs(new Date("12/12/2012"), new Date()));
 *
 * @return {number} difference in hours.
 */
const getDiffInHrs = (from, to) => Math.floor(Math.abs((new Date(from) - new Date(to)) / 36e5));

module.exports = getDiffInHrs;
