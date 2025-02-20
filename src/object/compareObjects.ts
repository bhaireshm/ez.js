import isObj from "../common/isObj";
import { AnyObject } from "../types";

/**
 * This function compares two objects by checking if their keys and values are equal. It can handle nested objects as well.
 *
 * @param {object} obj1 - The first object to compare.
 * @param {object} obj2 - The second object to compare.
 * @returns {boolean} - Returns true if the objects have the same keys and values, false otherwise.
 *
 * @example
 * compareObject({a: 2}, {a: 2}); // true
 *
 * compareObject({a: 2}, {a: 23}); // false
 *
 * compareObject({a: {b: 2}}, {a: {b: 2}}); // true
 */
export default function compareObject(obj1: AnyObject, obj2: AnyObject): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObj(val1) && isObj(val2);
    if ((areObjects && !compareObject(val1, val2)) || (!areObjects && val1 !== val2)) return false;
  }
  return true;
}
