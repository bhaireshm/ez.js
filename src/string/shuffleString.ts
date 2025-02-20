import isStr from "../common/isStr";

/**
 * Shuffles the characters of a given string and returns the shuffled string.
 *
 * @param {string} str - The input string to be shuffled.
 * @returns {string} The shuffled string.
 */
export default function shuffleString(str: string): string {
  str = str.trim().replace(/ /g, "");

  if (!isStr(str)) return str;
  const array = str.split("");

  // Fisher-Yates Shuffle Algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}
