import isEmpty from "../common/isEmpty";
import { AnyObject } from "../types";
import getNestedValue from "./getNestedValue";

/**
 * Checks the object. If any one key's value is empty, it returns false.
 *
 * @param {object} data - The object to be checked for empty values.
 * @param {string[]} [keys] - An optional array of dot-separated keys to check for empty values. If not provided, all direct properties of the object are checked.
 * @returns {boolean} - Returns true if all checked values in the object are non-empty, otherwise returns false.
 *
 * @example
 * const payload = { id: 2, name: "John", address: { city: "bangalore" } }
 * console.log(checkObject(payload)); // true
 * console.log(checkObject(payload, ["name"])); // true
 * console.log(checkObject(payload, ["address.city"])); // true
 *
 * const payloadWithEmpty = { id: 2, name: "", address: { city: "bangalore" } }
 * console.log(checkObject(payloadWithEmpty)); // false (because name is empty)
 * console.log(checkObject(payloadWithEmpty, ["name"])); // false
 * console.log(checkObject(payloadWithEmpty, ["id", "address.city"])); // true (because name is not checked)
 */
export default function checkObject(data: AnyObject, keys?: string[]): boolean {
  if (!data || typeof data !== 'object') {
    return false; // Data must be an object to check properties
  }

  const keysToCheck = keys || Object.keys(data);

  for (const key of keysToCheck) {
    const value = getNestedValue(data, key);
    if (isEmpty(value)) {
      return false; // Found an empty property
    }
  }

  return true; // All checked properties are non-empty
}
