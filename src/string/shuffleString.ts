import isStr from "../common/isStr";

/**
 * Shuffles the characters of a given string and returns the shuffled string.
 *
 * @param {string} str - The input string to be shuffled.
 * @returns {string} The shuffled string.
 * @warning This function uses `Math.random()` and is not cryptographically secure. Do not use for security-sensitive purposes (e.g., shuffling sensitive data).
 */
export default function shuffleString(str: string): string {
  str = str.trim().replace(/ /g, "");

  if (!isStr(str)) return str;
  // Use Array.from to correctly handle Unicode characters (e.g., emojis)
  const array = Array.from(str);

  // Fisher-Yates Shuffle Algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}
