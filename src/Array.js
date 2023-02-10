const compareObject = require("./helpers/compareObjects")

/**
 * @param arr: Array 
 * @param ele: element to be added
 * @param remEle: element to be deleted
*/
function addDelEleFromArray(arr = [], ele = "", remEle = "") {
    if (ele && !arr.some((a) => a == ele)) arr.push(ele);
    if (remEle) return arr.filter((a) => a != remEle);
    return arr;
}
// Array.prototype.addDelEleFromArray = addDelEleFromArray;

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

/**
 * Compares all the objects(both key and value) in the given array and returns the unique array.
 *
 * @param {Object[]} arr - An array of objects.
 * @returns unique array of object(s).
 *
 * @example uniqueArrayOfObjects([{a: 2}, {a: 2}]); // [{"a":  2}]
 * @example uniqueArrayOfObjects([{a: {b: 2}}, {a: {b: 2}}]); // [{"a": {"b": 2}}]
 * @example uniqueArrayOfObjects([{a: 2}, {a: 2, b: 3}]); // [{a: 2}, {a: 2, b: 3}]
 */
export function uniqueArrayOfObjects(arr) {
    return arr.reduce((acc, curr) => {
        if (acc.length > 0) {
            acc.forEach((a) => {
                if (a && !compareObject(a, curr)) acc.push(curr);
            });
        } else acc.push(curr);
        return acc;
    }, []);
}

/**
 * @param {Array} arr
 */
export const getUniqueArray = (arr = []) => {
    const uArr = [];
    arr.forEach((a) => {
        if (uArr.indexOf(a) === -1) uArr.push(a);
    });
    return uArr;
};

module.exports = { addDelEleFromArray, arrayIntoChunks, uniqueArrayOfObjects, getUniqueArray };