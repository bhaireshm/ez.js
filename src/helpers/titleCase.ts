/**
 * Convert a string to PascalCase by capitalizing the first letter of each word.
 * @param {string} str - The input string.
 * @returns {string} The string converted to PascalCase.
 * @example
 * // Returns 'HelloWorld'
 * titleCase('hello world');
 *
 * @example
 * // Returns 'Hello-world'
 * titleCase('hello-world');
 *
 * @example
 * // Returns 'HelloWorld'
 * titleCase('  hello world  ');
 */
export default function titleCase(str: string): string {
  // Handle empty string
  if (!str.trim()) return str;

  // Trim leading and trailing spaces, split into words and Convert to PascalCase
  return str
    .trim()
    .split(/\s+/)
    .map((w) => w.replace(/(^|\s)\S/g, (t) => t.toUpperCase()))
    .join("");
}
