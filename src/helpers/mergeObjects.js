/**
 * Uses deep merge way to merge objects. 
 * 
 * @param {object} obj1
 * @param {object} obj2
 * @returns {object} merged object
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