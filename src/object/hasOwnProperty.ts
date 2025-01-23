import isEmpty from "../common/isEmpty";
import getNestedValue from "./getNestedValue";

/**
 * Determines whether an object has a property with the specified name.
 *
 * @param {object} obj - The object to check for properties.
 * @param {string} keys - The keys to check for in the object, separated by commas.
 * @param {boolean} [returnType=false] - Determines the return type of the function. Defaults to false.
 * @returns {string|boolean} - If returnType is true, returns a boolean value indicating whether all keys were found in the object. If returnType is false, returns a string indicating whether all keys were found or which keys were not found.
 *
 * @example
 * console.log(hasOwnProperty({'a':1, 'b':2, 'c':3}, "a,d"));
 * // Output: "d not found"
 */
export default function hasOwnProperty(
  obj: object,
  keys: string,
  returnType: boolean = false, // todo: make boolean return as true
): string | boolean {
  if (isEmpty(obj) || isEmpty(keys)) return returnType ? false : "false";

  const _keys = keys.split(",");
  let isFound = false;
  let error = "";

  function checkProperty(k: string) {
    if (isEmpty(k)) return;
    else if (k.split(".").length > 1 && getNestedValue(obj, k)) isFound = true;
    else if (Object.hasOwn(obj, k)) isFound = true;
    else isFound = false;
    if (!isFound) error += `${k} `;
  }

  if (_keys.length > 1) for (const k of _keys) checkProperty(k);
  else checkProperty(_keys[0]);

  if (isFound) return returnType ? isFound : "All key(s) found";
  else return returnType ? isFound : `${error}not found`;
}
