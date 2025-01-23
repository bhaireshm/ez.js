import compareObjects from "../object/compareObjects";

/**
 * Compares all the objects (both key and value) in the given array and returns the unique array.
 *
 * @param {object[]} arr - An array of objects.
 * @returns {object[]} - The unique array of objects.
 *
 * @example
 * uniqueArrayOfObjects([{a: 2}, {a: 2}]); // [{"a":  2}]
 *
 * uniqueArrayOfObjects([{a: {b: 2}}, {a: {b: 2}}]); // [{"a": {"b": 2}}]
 *
 * uniqueArrayOfObjects([{a: 2}, {a: 2, b: 3}]); // [{a: 2}, {a: 2, b: 3}]
 */
export default function uniqueArrayOfObjects(arr: object[]): object[] {
  return arr.reduce((acc: object[], curr: object) => {
    if (acc.length === 0) acc.push(curr);
    if (!acc.some((a) => compareObjects(a, curr))) acc.push(curr);
    return acc;
  }, []);
}
