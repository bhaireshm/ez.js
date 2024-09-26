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
  if (!arr.length || n <= 0) return [];

  const out = [];
  let j = 0;

  for (let i = 0; i < Math.ceil(arr.length / Math.floor(n)); i++) {
    const temp = [];
    while (j < arr.length && temp.length < Math.floor(n)) {
      temp.push(arr[j]);
      j++;
    }
    out.push(temp);
  }
  return out;
}
