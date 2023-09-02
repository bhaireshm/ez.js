/**
 * Converts each word's first letter into uppercase.
 *
 * @param {string} str - The input string that needs to be converted to camel case.
 * @returns {string} - Returns a new string where each word's first letter is converted to uppercase.
 */
function camelCase(str) {
  return str.replace(/(^|\s)\S/g, (t) => t.toUpperCase());
}

module.exports = camelCase;
