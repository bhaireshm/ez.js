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
function getNestedValue(d: object = {}, k: string = ""): any {
  const keys: string[] = String(k).split(".");
  if (!keys.length) return null;
  return keys.reduce((p: any, c: any) => (Object(p).hasOwnProperty(c) ? p[c] : null), d);
}

export default getNestedValue;
