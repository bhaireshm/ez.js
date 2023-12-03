import isEmpty from "./isEmpty";

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
export default function isNum(n: any): boolean {
  return !isEmpty(n) && Object.prototype.toString.call(n) === "[object Number]";
}
