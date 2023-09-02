/**
 * Removes all the keys from an object for which the value is empty.
 * @param {object} obj - The object that may contain empty properties.
 * @returns {object} - An object with all the empty properties removed.
 */
function removeEmptyProperty(obj = {}) {
  const data = { ...obj };
  if (!data) return data;
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === "object") data[key] = removeEmptyProperty(data[key]);
    if (!data[key]) delete data[key];
  });
  return data;
}

module.exports = removeEmptyProperty;
