/**
 * Convert an array into given chunk(s).
 *
 * @param {Array} arr - The original array.
 * @param {number} n - The number of elements to include in each subarray.
 * @returns {Array} - Array of subarrays, where each subarray contains 'n' elements from the original array.
 *
 * @example
 * arrayIntoChunks([1,2,3,4,5,6], 3); // [[1,2],[3,4],[5,6]]
 * Splits an array into subarrays of length 'n'.
 */
function arrayIntoChunks(arr, n) {
  if (!arr.length) return [];
  return [arr.slice(0, n)].concat(arrayIntoChunks(arr.slice(n), n));
}

module.exports = arrayIntoChunks;
