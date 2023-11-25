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
function hasOwnProperty(obj: object, keys: string, returnType: boolean = false): string | boolean {
  if (Object.entries(obj).length === 0 || keys.length === 0) return returnType ? false : "false";
  else {
    const res = keys
      .split(",")
      .map((k) => {
        if (k !== "" && !Object.prototype.hasOwnProperty.call(obj, k))
          return returnType ? false : `${k} not found`;
      })
      .filter((a) => typeof a === "string")[0];
    if (returnType) return !res;
    return !res ? "All key(s) found" : false;
  }
}

export = hasOwnProperty;
