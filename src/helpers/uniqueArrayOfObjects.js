/**
 * Compares all the objects(both key and value) in the given array and returns the unique array.
 *
 * @param {object[]} arr - An array of objects.
 * @returns {object[]} unique array of object(s).
 *
 * @example
 * uniqueArrayOfObjects([{a: 2}, {a: 2}]); // [{"a":  2}]
 *
 * uniqueArrayOfObjects([{a: {b: 2}}, {a: {b: 2}}]); // [{"a": {"b": 2}}]
 *
 * uniqueArrayOfObjects([{a: 2}, {a: 2, b: 3}]); // [{a: 2}, {a: 2, b: 3}]
 */
function uniqueArrayOfObjects(arr) {
  return arr.reduce((acc, curr) => {
    if (acc.length > 0) {
      acc.forEach((a) => {
        if (a && !require("./compareObjects.js")(a, curr)) acc.push(curr);
      });
    } else acc.push(curr);
    return acc;
  }, []);
}

module.exports = uniqueArrayOfObjects;
