/**
 * @param {string} str - The input string to be shortened.
 * @param {number} len - The maximum length of the shortened string. Default value is 50 if not provided.
 * @returns {string} - The shortened string if the length of the input string is greater than the specified length, otherwise the original string.
 */
export default function shortenString(str: string = "", len: number = 50): string {
  if (str.length > len) return str.substring(0, len);
  return str;
}
