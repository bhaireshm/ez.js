/**
 * Checks if passed value is a `String` type.
 *
 * @param {string} str - The input to be checked.
 * @returns {boolean} - Returns `true` if passed value is a `String` type, otherwise `false`.
 *
 * @example
 * const result1 = isStr("hello"); // true
 * const result2 = isStr(123); // false
 * const result3 = isStr(true); // false
 */
export default function isStr(str: unknown): boolean {
  return typeof str === "string" || Object.prototype.toString.call(str) === "[object String]";
}
