/**
 * Get nested value from the given object.
 * 
 * @param {object} d
 * @param {string} k - key name separated by dot character
 * @example 
 * const data = {
	pid: 'some-id',
	portions: { name: 'section' }
}
 * console.log(getNestedKeyValue(data, "portions.name")); // 'section'
 * 
 * @returns {any} value, If nothing found null will be returned.
 */
function getNestedValue(d = {}, k = "") {
  const keys = String(k).split(".");
  if (!keys.length) return null;
  return keys.reduce((p, c) => (Object(p).hasOwn(c) ? p[c] : null), d);
}

export default getNestedValue;
