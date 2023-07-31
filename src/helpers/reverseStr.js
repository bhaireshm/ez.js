/**
 * @param {string} str: string without space
 */
function reverseStr(str) {
  return str.split("").reverse().join("");
}

/**
 * @param {string} sentence: pass a sentence.
 */
function reverseEachWordInSentence(sentence) {
  return sentence.split(" ").map(reverseStr).join(" ");
}

/**
 * @param {string} sentence - pass a sentence.
 */
function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

export { reverseStr, reverseEachWordInSentence, reverseSentence };
