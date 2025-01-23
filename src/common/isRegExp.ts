/**
 * Checks if a given value is a regular expression.
 *
 * @param value - The value to be checked if it is a regular expression.
 * @returns `true` if the value is a regular expression, `false` otherwise.
 *
 * @example
 * const regex = /[a-z]/;
 * console.log(isRegexp(regex)); // true
 *
 * const str = 'hello';
 * console.log(isRegexp(str)); // false
 */
export default function isRegexp(value: unknown): boolean {
  return typeof value === "object" && Object.prototype.toString.call(value) === "[object RegExp]";
}
