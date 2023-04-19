/**
 * @param {String} str: string without space
 */
function reverseStr(str) {
  return str.split('').reverse().join('');
}

/**
 * @param {String} sentence: pass a sentence. 
 */
function reverseEachWordInSentence(sentence) {
  return sentence.split(' ').map(reverseStr).join(' ');
}

/**
 * @param {String} sentence - pass a sentence.
 */
function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}


module.exports = { reverseStr, reverseEachWordInSentence, reverseSentence };