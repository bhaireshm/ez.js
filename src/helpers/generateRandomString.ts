/**
 * Generate a random string of characters.
 *
 * @param {number} [length=13] - The desired length of the random string. Default is 13.
 * @returns {string} - The randomly generated string.
 */
export default function generateRandomString(length: number = 13): string {
  let res = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
  return res;
}
