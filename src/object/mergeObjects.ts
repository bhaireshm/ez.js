import isObj from "../common/isObj";
import { AnyObject } from "../types";
import hasOwnProperty from "./hasOwnProperty";

/**
 * Uses deep merge way to merge objects.
 * Source will be merged with target.
 *
 * @param {object} source - The first object to be merged.
 * @param {object} target - The second object to be merged.
 * @returns {object} - The merged object containing the combined properties of source and target.
 *
 * @example
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { c: 3, d: 4 };
 * const result = mergeObjects(obj1, obj2);
 * console.log(result); // { a: 1, b: 2, c: 3, d: 4 }
 *
 * @example
 * const obj1 = { a: 1, b: [1, 2] };
 * const obj2 = { b: [3, 4], c: 4 };
 * const result = mergeObjects(obj1, obj2);
 * console.log(result); // { a: 1, b: [1, 2, 3, 4], c: 4 }
 *
 * @example
 * const obj1 = { a: { b: 1, c: [1, 2] } };
 * const obj2 = { a: { c: [3, 4], d: 4 }, e: 5 };
 * const result = mergeObjects(obj1, obj2);
 * console.log(result); // { a: { b: 1, c: [1, 2, 3, 4], d: 4 }, e: 5 }
 */
export default function mergeObjects(source: AnyObject, target: AnyObject): AnyObject {
  const s = { ...source };
  const t = { ...target };

  for (const key in s) {
    if (hasOwnProperty(s, key, true)) {
      if (Array.isArray(t[key]) && Array.isArray(s[key])) {
        t[key] = Array.from(new Set([...s[key], ...t[key]]));
        continue;
      }
      if (isObj(t[key]) && isObj(s[key])) {
        t[key] = mergeObjects(s[key], t[key]);
        continue;
      }
      t[key] = s[key];
    }
  }

  return t;
}
