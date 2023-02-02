/**
 * @param {Array} arr
 */
export const getUniqueArray = (arr = []) => {
  const uArr = [];
  arr.forEach((a) => {
    if (uArr.indexOf(a) === -1) uArr.push(a);
  });
  return uArr;
};