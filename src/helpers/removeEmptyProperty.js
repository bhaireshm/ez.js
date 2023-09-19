const isEmpty = require("./isEmpty");

/**
 * Removes all the keys from an object for which the value is empty.
 * @param {object} out - The object that may contain empty properties.
 * @returns {object} - An object with all the empty properties removed.
 */
function removeEmptyProperty(obj = {}) {
  obj = JSON.parse(JSON.stringify(obj));
  if (isEmpty(obj)) return null;
  if (Array.isArray(obj)) obj = obj.filter((a) => !isEmpty(a)).map((d) => removeEmptyProperty(d));
  if (typeof obj === "object") {
    Object.keys(obj).forEach((key) => {
      if (isEmpty(obj[key])) delete obj[key];
      const d = removeEmptyProperty(obj[key]);
      if (!isEmpty(d)) obj[key] = d;
    });
  }
  return obj;
}

module.exports = removeEmptyProperty;
