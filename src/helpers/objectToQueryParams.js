/**
 * @param {object} o
 */
const objectToQueryParams = (o = {}) =>
  Object.entries(o)
    .map((p) => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`)
    .join("&");

export default objectToQueryParams;
