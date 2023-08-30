/**
 * Uses deep merge way to merge objects.
 *
 * @param {object} obj1
 * @param {object} obj2
 * @returns {object} merged object
 */
function mergeObjects(obj1, obj2) {
  const o1 = Object.assign({}, obj1),
    o2 = Object.assign({}, obj2);

  for (const key in o1) {
    if (o1.hasOwnProperty(key)) {
      if (Array.isArray(o2[key]) && Array.isArray(o1[key])) {
        o2[key] = [...o1[key], ...o2[key]];
        continue;
      }
      if (typeof o2[key] === "object" && typeof o1[key] === "object") {
        o2[key] = mergeObjects(o1[key], o2[key]);
        continue;
      }
      o2[key] = o1[key];
    }
  }
  return o2;
}

module.exports = mergeObjects;
