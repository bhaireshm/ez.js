/**
 * Reverses a given string.
 *
 * @param {string} str - The input string without any spaces.
 * @returns {string} The reversed version of the input string.
 */
function reverseStr(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * Reverses each word in a sentence.
 *
 * @param {string} sentence - The sentence to be reversed.
 * @returns {string} The reversed sentence where each word is reversed.
 */
function reverseEachWordInSentence(sentence: string): string {
  return sentence.split(" ").map(reverseStr).join(" ");
}

/**
 * Reverses the order of words in a sentence.
 *
 * @param {string} sentence - The sentence to be reversed.
 * @returns {string} The reversed sentence.
 */
function reverseSentence(sentence: string): string {
  return sentence.split(" ").reverse().join(" ");
}

export { reverseEachWordInSentence, reverseSentence, reverseStr };
