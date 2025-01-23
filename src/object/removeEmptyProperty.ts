import isEmpty from "../common/isEmpty";
import isObj from "../common/isObj";
import { AnyObject } from "../types";

/**
 * Removes all the keys from an object for which the value is empty.
 * @param {object} data - The object that may contain empty properties.
 * @returns {object} - An object with all the empty properties removed.
 */
export default function removeEmptyProperty(data: AnyObject = {}) {
  function removeEmptyProperties(obj: any): any {
    let result: any;
    if (Array.isArray(obj)) {
      result = [];
      for (const ele of obj) {
        const d = removeEmptyProperties(ele);
        if (!isEmpty(d)) result.push(d);
      }
      return result;
    } else if (isObj(obj)) {
      result = {};
      for (const key in obj) {
        if (!isEmpty(obj[key])) {
          result[key] = removeEmptyProperties(obj[key]);
        }
      }
      return isEmpty(result) ? null : result;
    } else return obj;
  }

  // Create a deep copy of the data object
  const _data = JSON.parse(JSON.stringify(data));

  // Remove empty properties recursively
  return removeEmptyProperties(_data);
}
