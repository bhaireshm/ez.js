import hasOwnProperty from "./hasOwnProperty";
import isObj from "./isObj";

/**
 * Uses deep merge way to merge objects.
 *
 * @param {object} obj1 - The first object to be merged.
 * @param {object} obj2 - The second object to be merged.
 * @returns {object} - The merged object containing the combined properties of obj1 and obj2.
 */
export default function mergeObjects(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
): Record<string, any> {
  const o1 = { ...obj1 };
  const o2 = { ...obj2 };

  for (const key in o1) {
    if (hasOwnProperty(o1, key, true)) {
      if (Array.isArray(o2[key]) && Array.isArray(o1[key])) {
        o2[key] = [...o1[key], ...o2[key]];
        continue;
      }
      if (isObj(o2[key]) && isObj(o1[key])) {
        o2[key] = mergeObjects(o1[key], o2[key]);
        continue;
      }
      o2[key] = o1[key];
    }
  }

  return o2;
}
