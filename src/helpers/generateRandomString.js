/**
 * @param {number} length - default is 13 
 */
function generateRandomString(length = 13) {
  let res = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
  return res;
}

module.exports = generateRandomString;