/**
 * Returns a new array with only the unique elements from the input array.
 *
 * @param {Array} arr - An array of elements. Default value is an empty array.
 * @returns {Array} - An array containing only the unique elements from the input array.
 */
function getUniqueArray(arr = []) {
  const uArr = [];
  arr.forEach((a) => {
    if (uArr.indexOf(a) === -1) uArr.push(a);
  });
  return uArr;
}

module.exports = getUniqueArray;
