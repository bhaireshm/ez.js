import { isArray, isBool, isNull, isNum, isObj, isRegExp, isStr, isUndefined } from ".";

/**
 * Check's the provided input is valid.
 *
 * @param {any} data - The input data to be checked for emptiness.
 * @returns {boolean} - Returns true if the input is empty, otherwise returns false.
 */
export default function isEmpty(data: unknown): boolean {
  if (data === "" || data === null) return true;

  // if (typeof data === 'number' || typeof data === "boolean") return false;
  // if (Array.isArray(data)) return data.length === 0;
  // let count = 0;
  // for (const i in data) if (data.hasOwnProperty(i)) count++;
  // return count === 0;

  return !(isUndefined(data) || isNull(data) || isNum(data) || isBool(data) || isStr(data) || isObj(data) || isArray(data) || isRegExp(data));
}
