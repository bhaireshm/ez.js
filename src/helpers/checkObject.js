const getNestedValue = require("./getNestedValue.js");
const isEmpty = require("./isEmpty.js");

/**
 * Checks the object, if any one key's value is empty it returns false.
 *
 * @param {object} data - The object to be checked for empty values.
 * @param {string[]} keys - An optional array of keys to check for empty values. Default is an empty array.
 * @returns {boolean} - Returns true if all values in the object are non-empty, otherwise returns false.
 *
 * @example
 * const payload = { id: 2, name: "John", address: { city: "bangalore" } }
 * console.log(checkObject(payload, ["iddas"]));// false
 * console.log(checkObject(payload, ["name"]));// true
 * console.log(checkObject(payload, ["address.city"]));// true
 */
function checkObject(data, keys = []) {
  if (keys.length) return keys.map((key) => getNestedValue(data, key)).some((v) => !isEmpty(v));
  for (const key in data) if (!isEmpty(data[key])) return false;
  return true;
}

module.exports = checkObject;
