import isEmpty from "./isEmpty";
import isObj from "./isObj";

/**
 * Removes all the keys from an object for which the value is empty.
 * @param {object} data - The object that may contain empty properties.
 * @returns {object} - An object with all the empty properties removed.
 */
export default function removeEmptyProperty(data: Record<string, any> = {}) {
  function removeEmptyProperties(obj: any): any {
    if (Array.isArray(obj))
      return obj.filter((element) => !isEmpty(removeEmptyProperties(element)));
    if (isObj(obj)) {
      const result: any = {};
      for (const key in obj) if (!isEmpty(obj[key])) result[key] = removeEmptyProperties(obj[key]);
      return result;
    }
    return obj;
  }

  // Create a deep copy of the data object
  const _data = JSON.parse(JSON.stringify(data));

  // Remove empty properties recursively
  return removeEmptyProperties(_data);
}
