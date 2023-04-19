/**
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns merged object
 */
function mergeObjects(obj1, obj2) {
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (typeof obj2[key] === "object" && typeof obj1[key] === "object") {
        mergeObjects(obj1[key], obj2[key]);
        continue;
      }
      obj2[key] = obj1[key];
    }
  }
  return obj2;
}

module.exports = mergeObjects;