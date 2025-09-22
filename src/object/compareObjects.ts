import isObj from "../common/isObj";
import { AnyObject } from "../types";

/**
 * This function compares two objects by checking if their keys and values are equal. It can handle nested objects as well.
 * It also handles circular references to prevent infinite loops.
 *
 * @param {object} obj1 - The first object to compare.
 * @param {object} obj2 - The second object to compare.
 * @param {Set<object>} [visited = new Set()] - Internal parameter to track visited objects for circular reference detection.
 * @returns {boolean} - Returns true if the objects have the same keys and values, false otherwise.
 *
 * @example
 * compareObject({a: 2}, {a: 2}); // true
 *
 * compareObject({a: 2}, {a: 23}); // false
 *
 * compareObject({a: {b: 2}}, {a: {b: 2}}); // true
 *
 * // Circular reference example
 * const objA = {};
 * const objB = {};
 * objA.b = objB;
 * objB.a = objA;
 * compareObject(objA, objB); // true (if they are structurally identical)
 */
export default function compareObject(obj1: AnyObject, obj2: AnyObject, visited: Set<object> = new Set()): boolean {
  // If both are the same object reference, they are equal
  if (obj1 === obj2) return true;

  // If either is not an object or is null, and they are not strictly equal (handled above), they are not equal
  if (!isObj(obj1) || !isObj(obj2) || obj1 === null || obj2 === null) return false;

  // Handle circular references: if both objects have been visited, they are part of a cycle.
  // If we reach this point, and they are not strictly equal (handled above),
  // and they are both in the visited set, it implies they are structurally identical within the cycle.
  if (visited.has(obj1) && visited.has(obj2)) {
    return true; // Both are part of a cycle and have been matched so far
  }

  // If only one is visited, or neither, add them to visited set for the current comparison path
  visited.add(obj1);
  visited.add(obj2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) return false; // obj2 must have the same key

    const val1 = obj1[key];
    const val2 = obj2[key];

    // Recursively compare nested objects
    if (isObj(val1) && isObj(val2)) {
      // Pass the same visited set to the recursive call
      if (!compareObject(val1, val2, visited)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }

  // After comparing all properties, remove objects from visited set for this path.
  // This is important if compareObject is called multiple times with different root objects
  // and those objects might share sub-objects that are not part of a cycle in the current comparison.
  // This ensures that the `visited` set is clean for subsequent independent comparisons.
  visited.delete(obj1);
  visited.delete(obj2);

  return true;
}
