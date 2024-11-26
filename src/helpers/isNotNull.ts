/**
 * Checks if a given value is not null.
 *
 * @param value - The value to be checked for null.
 * @returns true if the value is not null, false otherwise.
 *
 * @example
 * const value1 = null;
 * const value2 = "Hello";
 *
 * console.log(isNotNull(value1)); // false
 * console.log(isNotNull(value2)); // true
 */
export default function isNotNull(value: unknown): boolean {
  return value !== null;
}
