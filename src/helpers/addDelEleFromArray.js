/**
 * @param {Array} arr
 * @param {any} ele element to be added
 * @param {any} remEle: element to be deleted
 *
 * @returns {Array}
 */
function addDelEleFromArray(arr = [], ele = "", remEle = "") {
  if (ele && !arr.some((a) => a == ele)) arr.push(ele);
  if (remEle) return arr.filter((a) => a != remEle);
  return arr;
}

module.exports = addDelEleFromArray;
