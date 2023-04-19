/**
 * @param {any string} str
 */
const camelCase = (str) => str.replace(/(^|\s)\S/g, (t) => t.toUpperCase());

module.exports = camelCase;