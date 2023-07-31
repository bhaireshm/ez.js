/**
 * Determines whether an object has a property with the specified name.
 * 
 * @param {object} obj
 * @param {string} keys seperated by comma
 * 
 * @default false
 * @param {boolean} returnType
 * 
 * @example
 * console.log(hasOwnProperty({'a':1, 'b':2, 'c':3}, "a,d"));
 * 
 * @return {string | boolean}
 */
function hasOwnProperty(obj, keys, returnType = false) {
  if (Object.entries(obj).length == 0 || keys.length == 0) return returnType ? false : "false";
  else {
    const res = keys.split(",").map((k) => {
      if (k != "" && !Object.hasOwnProperty.call(obj, k)) return returnType ? false : `${k} not found`;
    }).filter(a => typeof a == 'string')[0];
    if (returnType) return !res ? true : false;
    return !res ? "All key(s) found" : false;
  }
};

module.exports = hasOwnProperty;