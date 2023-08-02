/**
 * This method compares both key and value of given objects. This even works for nested objects.
 *
 * @param {object} obj1
 * @param {object} obj2
 * @returns {boolean}
 *
 * @example
 * compareObject({a: 2}, {a: 2}); // true
 *
 * compareObject({a: 2}, {a: 23}); // false
 *
 * ompareObject({a: {b: 2}}, {a: {b: 2}}); // true
 */
function compareObject(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  const isObject = (object) => object != null && typeof object === "object";

  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if ((areObjects && !this.compareObject(val1, val2)) || (!areObjects && val1 !== val2))
      return false;
  }
  return true;
}

module.exports = compareObject;
