/**
 * @param {string} str - The input string to be shortened.
 * @param {number} len - The maximum length of the shortened string. Default value is 50 if not provided.
 * @returns {string} - The shortened string if the length of the input string is greater than the specified length, otherwise the original string.
 */
export default function shortenString(str: string = "", len: number = 50): string {
  // Use Array.from to correctly handle Unicode characters (e.g., emojis)
  const chars = Array.from(str);
  if (chars.length > len) {
    return chars.slice(0, len).join("");
  }
  return str;
}
