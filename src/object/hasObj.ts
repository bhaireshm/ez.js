import isNotNull from "../common/isNotNull";
import isObj from "../common/isObj";
import compareObject from "./compareObjects";

/**
 * Checks if a given object is within an array of objects.
 * Checks for object equality using the `compareObject` function.
 *
 * @param {object[]} objArr - The array of objects to check within.
 * @param {object} data - The object to find within the array.
 * @param {boolean} [returnType=false] - If true, returns the found object; otherwise, returns a boolean indicating presence.
 *
 * @example
 * const objArr = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
 * const data = { id: 1, name: 'John' };
 *
 * const result_1 = hasObj(objArr, data);
 * console.log(result_1); // true
 *
 * const result_2 = hasObj(objArr, data, true);
 * console.log(result_2); // { id: 1, name: 'John' }
 */
export default function hasObj(
  objArr: Array<object>,
  data: object,
  returnType: boolean = false,
): boolean | object {
  for (const item of objArr) {
    if (isObj(item) && isNotNull(item) && compareObject(item, data))
      return returnType ? item : true;
  }
  return returnType ? {} : false;
}
