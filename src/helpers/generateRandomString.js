/**
 * Generate a random string of characters.
 *
 * @param {number} [length=13] - The desired length of the random string. Default is 13.
 * @returns {string} - The randomly generated string.
 */
function generateRandomString(length = 13) {
  let res = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
  return res;
}

module.exports = generateRandomString;
