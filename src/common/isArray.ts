/**
 * Checks if the input is an array.
 *
 * @param arr - The input to be checked if it is an array.
 * @returns `true` if the input is an array, `false` otherwise.
 *
 * @example
 * const arr1 = [1, 2, 3];
 * const arr2 = 'not an array';
 *
 * console.log(isArray(arr1)); // true
 * console.log(isArray(arr2)); // false
 */
export default function isArray(arr: unknown): boolean {
  return (typeof arr === "object" && Array.isArray(arr)) || arr instanceof Array;
}
