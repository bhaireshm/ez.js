import isEmpty from "../common/isEmpty";
import getNestedValue from "./getNestedValue";

/**
 * Determines whether an object has a property with the specified name.
 *
 * @param {object} obj - The object to check for properties.
 * @param {string} keys - The keys to check for in the object, separated by commas.
 * @param {boolean} [returnBoolean=false] - Determines the return type of the function. Defaults to false.
 * @returns {string|boolean} - If returnBoolean is true, returns a boolean value indicating whether all keys were found in the object. If returnBoolean is false, returns a string indicating whether all keys were found or which keys were not found.
 *
 * @example
 * console.log(hasOwnProperty({'a':1, 'b':2, 'c':3}, "a,d"));
 * // Output: "d not found"
 */
export default function hasOwnProperty(
  obj: object,
  keys: string,
  returnBoolean: boolean = false,
): string | boolean {
  if (isEmpty(obj) || isEmpty(keys)) {
    return returnBoolean ? false : "false";
  }

  const keysToCheck = keys.split(",");
  const notFoundKeys: string[] = [];

  for (const k of keysToCheck) {
    const key = k.trim();
    if (isEmpty(key)) continue;

    // Check for nested properties
    if (key.includes(".")) {
      if (getNestedValue(obj, key) === null) {
        notFoundKeys.push(key);
      }
    } else {
      // Check for own property
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        notFoundKeys.push(key);
      }
    }
  }

  if (notFoundKeys.length > 0) {
    return returnBoolean ? false : `${notFoundKeys.join(", ")} not found`;
  }

  return returnBoolean ? true : "All key(s) found";
}
