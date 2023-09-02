/**
 * Calculates the difference between two provided dates and returns the result in various formats.
 *
 * @param {Date} from - The starting date.
 * @param {Date} to - The ending date.
 * @returns {{
 *   short: string,
 *   full: string,
 *   days: number,
 *   hours: number,
 *   minutes: number
 * }} - An object containing the short and full string representations of the difference, as well as the individual calculated values.
 *
 * @example
 * console.log(dateDiff(new Date("12/12/2012"), new Date()));
 * // Output
 * {
 *   "short": "3885d 15h 39m",
 *   "full": "3885 day(s) 15 hours, 39 minutes",
 *   "days": 3885,
 *   "hours": 15,
 *   "minutes": 39
 * }
 */
function dateDiff(from, to) {
  from = new Date(from);
  to = new Date(to);
  let diffMs = to - from; // milliseconds between from & to
  let diffDays = Math.floor(diffMs / 86400000); // days
  let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  let str = "";
  str += diffDays ? diffDays + "d " : "";
  str += diffHrs ? diffHrs + "h" : "";
  str += diffMins ? " " + diffMins + "m" : "";
  return {
    short: str.trimEnd().trimStart().replace(/ {2}/g, " "),
    full: `${diffDays} day(s) ${diffHrs} hours, ${diffMins} minutes`,
    days: diffDays,
    hours: diffHrs,
    minutes: diffMins,
  };
}

module.exports = dateDiff;
