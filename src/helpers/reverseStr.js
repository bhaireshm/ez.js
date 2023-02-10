/**
 * @param {String} str: string without space
 */
export function reverseStr(str) {
  return str.split('').reverse().join('');
}

/**
 * @param {String} sentence: pass a sentence. 
 */
export function reverseEachWordInSentence(sentence) {
  return sentence.split(' ').map(reverseStr).join(' ');
}

/**
 * @param {String} sentence - pass a sentence.
 */
export function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}