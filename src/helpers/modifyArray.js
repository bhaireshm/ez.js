/**
 * Add or remove an element from an array.
 *
 * @param {Array} arr
 * @param {any} ele element to be added
 * @param {any} remEle: element to be deleted
 *
 * @returns {Array}
 */
function modifyArray(arr = [], ele = "", remEle = "") {
  if (ele && !arr.some((a) => a == ele)) arr.push(ele);
  if (remEle) return arr.filter((a) => a != remEle);
  return arr;
}

/**
 * Add or remove an element from an array.
 *
 * @param {Array} arr
 * @param {any} ele element to be added
 * @param {any} remEle: element to be deleted
 *
 * @deprecated
 * @note use `modifyArray` instead
 *
 * @returns {Array}
 */
const addDelEleFromArray = modifyArray;

module.exports = { addDelEleFromArray, modifyArray };
