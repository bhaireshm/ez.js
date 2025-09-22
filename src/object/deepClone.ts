import isObj from "../common/isObj";

/**
 * Performs a deep clone of an object or array, handling circular references.
 * Supports cloning of Date and RegExp objects.
 *
 * @param {any} obj - The object or array to clone.
 * @param {WeakMap<object, any>} [visited] - Internal parameter for tracking visited objects to handle circular references.
 * @returns {any} - The deep cloned object or array.
 */
export default function deepClone(obj: any, visited = new WeakMap()): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (visited.has(obj)) {
    return visited.get(obj);
  }

  let clone: any;
  if (Array.isArray(obj)) {
    clone = [];
    visited.set(obj, clone);
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i], visited);
    }
  } else if (obj instanceof Date) { // Handle Date objects
    clone = new Date(obj.getTime());
    visited.set(obj, clone);
  } else if (obj instanceof RegExp) { // Handle RegExp objects
    clone = new RegExp(obj.source, obj.flags);
    visited.set(obj, clone);
  } else if (isObj(obj)) { // Generic object
    clone = {};
    visited.set(obj, clone);
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = deepClone(obj[key], visited);
      }
    }
  } else {
    // For other types of objects (e.g., custom classes not handled above),
    // attempt to clone by creating a new instance and copying properties.
    // This might not be suitable for all custom objects.
    try {
      clone = Object.create(Object.getPrototypeOf(obj));
      visited.set(obj, clone);
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          clone[key] = deepClone(obj[key], visited);
        }
      }
    } catch (e) {
      // Fallback for objects that cannot be easily cloned (e.g., DOM nodes, functions)
      clone = obj;
    }
  }
  return clone;
}
