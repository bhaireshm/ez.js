/**
 * Converts each word's first letter into uppercase.
 *
 * @param {string} str - The input string that needs to be converted to camel case.
 * @returns {string} - Returns a new string where each word's first letter is converted to uppercase.
 */
export default function toCamelCase(str: string): string {
  return str.trim().replace(/[^a-zA-Z0-9]+(\w|$)/g, (_, p1) => p1.toUpperCase());
}
