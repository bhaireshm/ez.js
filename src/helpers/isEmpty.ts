import { isObj, isRegExp } from ".";

/**
 * Check's the provided input is valid.
 *
 * @param {any} data - The input data to be checked for emptiness.
 * @returns {boolean} - Returns true if the input is empty, otherwise returns false.
 */
export default function isEmpty(data: unknown): boolean {
  if (data === null) return true;

  if (typeof data === 'number' || typeof data === "boolean") return false;

  if (Array.isArray(data) || typeof data === 'string') return !data.length;

  if (isObj(data)) {
    let count = 0;
    for (const i in data) if (data.hasOwnProperty(i)) count++;
    return count === 0;
  }

  return !isRegExp(data);
}
