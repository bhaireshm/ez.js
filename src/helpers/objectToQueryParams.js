/**
 * Converts an object into a query string format.
 *
 * @param {object} o - The object to be converted into query parameters.
 * @returns {string} - The query parameters string.
 */
function objectToQueryParams(o = {}) {
  return Object.entries(o)
    .map((p) => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`)
    .join("&");
}

module.exports = objectToQueryParams;
