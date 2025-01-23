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
export default function dateDiff(
  from: Date,
  to: Date,
  showNegative: boolean = true,
): {
  short: string;
  full: string;
  days: number;
  hours: number;
  minutes: number;
} {
  from = new Date(from);
  to = new Date(to);
  const checkPrevDay = Math[showNegative ? "floor" : "abs"];
  const diffMs = to.getTime() - from.getTime(); // milliseconds between from & to
  const diffDays = checkPrevDay(diffMs / 86400000); // days
  const diffHrs = checkPrevDay((diffMs % 86400000) / 3600000); // hours
  const diffMins = checkPrevDay(Math.round(((diffMs % 86400000) % 3600000) / 60000)); // minutes
  let str = "";
  str += diffDays ? diffDays + "d " : "";
  str += diffHrs ? diffHrs + "h" : "";
  str += diffMins ? " " + diffMins + "m" : "";
  const sign = str && diffDays + diffHrs + diffMins < 0 && showNegative ? "-" : "";
  return {
    short: `${sign}${str.trimEnd().trimStart().replace(/ {2}/g, " ")}`,
    full: `${diffDays} day(s) ${diffHrs} hours, ${diffMins} minutes`,
    days: diffDays,
    hours: diffHrs,
    minutes: diffMins,
  };
}
