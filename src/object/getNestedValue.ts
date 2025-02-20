import isEmpty from "../common/isEmpty";
import { AnyObject } from "../types";
import hasOwnProperty from "./hasOwnProperty";

/**
 * Get nested value from the given object.
 *
 * @param {object} d - The object from which the nested value will be retrieved.
 * @param {string} k - The dot-separated key to access the nested value.
 * @returns {any} - The nested value from the given object. If the nested value is not found, null is returned.
 *
 * @example
 * const data = {
 *   pid: 'some-id',
 *   portions: {
 *     name: 'section'
 *   }
 * };
 * console.log(getNestedValue(data, "portions.name")); // 'section'
 */
export default function getNestedValue(d: AnyObject = {}, k: string = ""): any {
  if (isEmpty(d)) return null;
  const keys: string[] = String(k).split(".");
  if (!keys.length) return null;
  return keys.reduce((p, c) => (hasOwnProperty(p, c, true) ? p[c] : null), d) ?? null;
}
