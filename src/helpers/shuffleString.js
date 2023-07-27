/**
* @param {string} - str
*/
const shuffleString = (str) => {
  str = str.trim().replace(/ /g, "");
  let res = "";
  const getRandomChar = (c) => c.charAt(Math.floor(Math.random() * c.length));
  for (const s of str) res += getRandomChar(s);
  return res;
};

module.exports = shuffleString;