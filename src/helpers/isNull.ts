/**
 * Checks if a given value is null.
 *
 * @param value - The value to be checked for null.
 * @returns true if the value is null, false otherwise.
 *
 * @example
 * const value1 = null;
 * const value2 = "Hello";
 *
 * console.log(isNull(value1)); // true
 * console.log(isNull(value2)); // false
 */
export default function isNull(value: unknown): boolean {
  return value === null;
}
