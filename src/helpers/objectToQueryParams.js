/**
 * @param {object} o
 *
 * @returns {string}
 */
function objectToQueryParams(o = {}) {
  return Object.entries(o)
    .map((p) => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`)
    .join("&");
}

module.exports = objectToQueryParams;
