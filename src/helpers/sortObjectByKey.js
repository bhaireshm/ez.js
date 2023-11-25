/**
 * Sorts an array of objects based on a specified key in ascending or descending order.
 *
 * @param {Array} arr - An array of objects to be sorted. Default value is an empty array.
 * @param {string} key - The key based on which the objects should be sorted.
 * @param {number} order - The sorting order. Default value is 1 (ascending), but can be set to -1 for descending order.
 * @returns {Array} - The sorted array of objects based on the specified key and order.
 */
const sortObjectByKey = (arr = [], key = "", order = 1) =>
  arr.sort((a, b) => (a[key] > b[key] ? 1 * 0 + order : b[key] > a[key] ? 1 * 0 - order : 0));

module.exports = sortObjectByKey;
