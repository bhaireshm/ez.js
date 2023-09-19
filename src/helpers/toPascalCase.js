/**
 * Converts a string to PascalCase format.
 * @param {string} str - The input string to be converted to PascalCase.
 * @param {boolean} [removeSpecialChars=false] - If set to true, any special characters in the string will be removed before conversion.
 * @returns {string} The input string converted to PascalCase format.
 */
function toPascalCase(str, removeSpecialChars = false) {
  if (removeSpecialChars) str = str.replace(/[-_]+/g, " ").replace(/[^\w\s]/g, "");
  return str.replace(/(^|\s)\S/g, (t) => t.toUpperCase());
}

module.exports = toPascalCase;
