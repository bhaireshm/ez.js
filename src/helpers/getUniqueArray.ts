/**
 * Returns a new array with only the unique elements from the input array.
 *
 * @param {Array} arr - An array of elements. Default value is an empty array.
 * @returns {Array} - An array containing only the unique elements from the input array.
 */
export default function getUniqueArray<T>(arr: T[] = []): T[] {
  const uArr: T[] = [];
  arr.forEach((a) => {
    if (uArr.indexOf(a) === -1) uArr.push(a);
  });
  return uArr;
}
