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
export default function getDiffInHrs(from: Date, to: Date): number {
  return Math.floor(Math.abs(((new Date(from) as any) - (new Date(to) as any)) / 36e5));
}
