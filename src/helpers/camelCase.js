/**
 * Converts each word's first letter into uppercase.
 * 
 * @param {string} str
 * 
 * @returns {string}
 */
const camelCase = (str) => str.replace(/(^|\s)\S/g, (t) => t.toUpperCase());

module.exports = camelCase;