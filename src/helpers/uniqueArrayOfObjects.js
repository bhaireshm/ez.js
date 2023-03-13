const compareObjects = require('./compareObjects.js');

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
module.exports = function uniqueArrayOfObjects(arr) {
    return arr.reduce((acc, curr) => {
        if (acc.length > 0) {
            acc.forEach((a) => {
                if (a && !compareObjects(a, curr)) acc.push(curr);
            });
        } else acc.push(curr);
        return acc;
    }, []);
}