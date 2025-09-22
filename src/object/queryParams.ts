/**
 * Converts an object into a query string format.
 *
 * @param {object} o - The object to be converted into query parameters.
 * @returns {string} - The query parameters string.
 */
export function objectToQueryParams(o: { [key: string]: any } = {}): string {
  const sp = new URLSearchParams();
  Object.entries(o).forEach(([k, v]) => {
    if (Array.isArray(v)) {
      v.forEach(item => sp.append(k, String(item))); // Use append for arrays to allow multiple values for same key
    } else if (typeof v === 'object' && v !== null) {
      // For objects, stringify them. This might still be problematic for some APIs.
      // A more robust solution might involve flattening the object or defining a custom serialization.
      sp.set(k, JSON.stringify(v));
    } else {
      sp.set(k, String(v));
    }
  });
  return sp.toString();
}

/**
 * Converts a query string into an object.
 *
 * @param {string} qs - The query string.
 * @returns {object} - The object created from the query string.
 */
export function queryParamsToObject(qs: string): object {
  const sp = new URLSearchParams(qs);
  const result: { [key: string]: any } = {};
  for (const [k, v] of sp.entries()) {
    try {
      // Attempt to parse as JSON, otherwise keep as string
      result[k] = JSON.parse(v);
    } catch (e) {
      result[k] = v;
    }
  }
  return result;
}
