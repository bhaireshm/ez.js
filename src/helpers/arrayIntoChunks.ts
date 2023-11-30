/**
 * Convert an array into given chunk(s).
 *
 * @param arr - The original array.
 * @param n - The number of elements to include in each subarray.
 * @returns Array of subarrays, where each subarray contains 'n' elements from the original array.
 *
 * @example
 * arrayIntoChunks([1,2,3,4,5,6], 3); // [[1,2],[3,4],[5,6]]
 * Splits an array into subarrays of length 'n'.
 */
export default function arrayIntoChunks<T>(arr: T[], n: number): T[][] {
  if (!arr.length || n <= 0 || n > arr.length) return [];
  n = Math.floor(n);
  return [arr.slice(0, n)].concat(arrayIntoChunks(arr.slice(n), n));
}
