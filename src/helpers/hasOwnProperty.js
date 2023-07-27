/**
 * @param {Object} obj
 * @param {string} keys : keys seperated by comma
 * Example : console.log( hasOwnProperty({'a':1, 'b':2, 'c':3}, "a,d") );
 */
const hasOwnProperty = (obj, keys) => {
  if (Object.entries(obj).length == 0 || keys.length == 0) return "false";
  else return keys.split(",").map((k) => {
    if (k != "" && !Object.hasOwnProperty.call(obj, k)) return `${k} not found`;
  }).filter(a => typeof a == 'string')[0] || "All key(s) found";
};

module.exports = hasOwnProperty;