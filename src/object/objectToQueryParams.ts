/**
 * Converts an object into a query string format.
 *
 * @param {object} o - The object to be converted into query parameters.
 * @returns {string} - The query parameters string.
 */
export default function objectToQueryParams(o: { [key: string]: any } = {}): string {
  return Object.entries(o)
    .map(([key, value]) => {
      value = typeof value === "object" ? JSON.stringify(value) : value;
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");
}
