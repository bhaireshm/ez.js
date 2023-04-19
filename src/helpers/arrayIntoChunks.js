
/**
 * Convert an array into given chunk(s).
 * 
 * @param {any[]} arr - Any type of array
 * @param {number} n - Number of chunks
 * @example arrayIntoChunks([1,2,3,4,5,6], 3);
 * @output [[1,2],[3,4],[5,6]]
 * 
 * @returns Array of array[s].
 */
function arrayIntoChunks(arr, n) {
    if (!arr.length) return [];
    return [arr.slice(0, n)].concat(arrayIntoChunks(arr.slice(n), n));
}

module.exports = arrayIntoChunks;