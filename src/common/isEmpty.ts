import isBool from "./isBool";
import isNull from "./isNull";
import isNum from "./isNum";
import isObj from "./isObj";
import isRegexp from "./isRegExp";
import isStr from "./isStr";

/**
 * Check's the provided input is valid.
 *
 * @param {any} data - The input data to be checked for emptiness.
 * @returns {boolean} - Returns true if the input is empty, otherwise returns false.
 */
export default function isEmpty(data: unknown): boolean {
  if (isNull(data)) return true;

  if (isNum(data) || isBool(data)) return false;

  if (Array.isArray(data) || isStr(data)) return (data as any[] | string).length === 0;

  if (isObj(data)) {
    let count = 0;
    for (const i in data as object) if (Object.prototype.hasOwnProperty.call(data, i)) count++;
    return count === 0;
  }

  return !isRegexp(data);
}
