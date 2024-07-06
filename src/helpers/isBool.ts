/**
 * Checks if a value is a boolean.
 *
 * @param val - The value to be checked.
 * @returns `true` if the value is a boolean, `false` otherwise.
 *
 * @example
 * const value1 = true;
 * const value2 = false;
 * const value3 = 1;
 *
 * console.log(isBool(value1)); // true
 * console.log(isBool(value2)); // true
 * console.log(isBool(value3)); // false
 */
export default function isBool(val: unknown): val is boolean {
  return typeof val === 'boolean' || Object.prototype.toString.call(val) === "[object Boolean]";
}
