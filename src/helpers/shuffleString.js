/**
 * Shuffles the characters of a given string and returns the shuffled string.
 *
 * @param {string} str - The input string to be shuffled.
 * @returns {string} The shuffled string.
 */
function shuffleString(str) {
  str = str.trim().replace(/ /g, "");
  let res = "";
  const getRandomChar = (c) => c.charAt(Math.floor(Math.random() * c.length));
  for (const s of str) res += getRandomChar(s);
  return res;
}

module.exports = shuffleString;
