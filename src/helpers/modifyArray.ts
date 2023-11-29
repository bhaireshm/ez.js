/**
 * Add or remove an element from an array.
 *
 * @param {Array<any>} arr - The array to be modified.
 * @param {any} ele - The element to be added.
 * @param {any} remEle - The element to be removed.
 *
 * @returns {Array<any>} - The modified array.
 */
export default function modifyArray(arr: any[] = [], ele?: any, remEle?: any): any[] {
  if (ele !== undefined && !arr.some((a) => a === ele)) arr.push(ele);
  if (remEle !== undefined) return arr.filter((a) => a !== remEle);
  return arr;
}
