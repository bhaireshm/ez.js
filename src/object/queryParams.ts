/**
 * Converts an object into a query string format.
 *
 * @param {object} o - The object to be converted into query parameters.
 * @returns {string} - The query parameters string.
 */
export function objectToQueryParams(o: { [key: string]: any } = {}): string {
  const sp = new URLSearchParams();
  Object.entries(o).forEach(([k, v]) => sp.set(k, JSON.stringify(v)));
  return sp.toString();
}

/**
 * Converts a query string into an object.
 *
 * @param {string} qs - The query string.
 * @returns {object} - The object created from the query string.
 */
function queryParamsToObject(qs: string): object {
  const sp = new URLSearchParams(qs);
  return Object.fromEntries(sp.entries().map(([k, v]) => [k, JSON.parse(v)]));
}
