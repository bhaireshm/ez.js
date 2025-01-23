/**
 * Checks if a given value is a non-empty string representation of a number.
 *
 * @param n - The value to be checked.
 * @returns Returns `true` if the value is a non-empty string representation of a number, otherwise `false`.
 *
 * @example
 * const result1 = isNum(123); // false
 * const result2 = isNum("123"); // true
 * const result3 = isNum("abc"); // false
 */
export default function isNum(n: unknown): boolean {
  return typeof n === "number" || Object.prototype.toString.call(n) === "[object Number]";
}
