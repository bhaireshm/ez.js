/**
 * Removes all the key's for which the value is empty. 
 * @param {Object} obj
 */
export function removeEmptyProperty(obj = {}) {
  const data = { ...obj };
  if (!data) return data;
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === "object") data[key] = removeEmptyProperty(data[key]);
    if (!data[key]) delete data[key];
  });
  return data;
}