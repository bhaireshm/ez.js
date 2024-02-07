/**
 * Checks if a value is undefined.
*
* @param value - The value to be checked.
* @returns A boolean indicating whether the value is undefined or not.
*
* @example
* const result = isUndefined(someValue);
* console.log(result); // true or false
*/
export default function isUndefined(value: unknown): boolean {
  return value === undefined;
}
