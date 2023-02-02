/**
 * @param arr: Array 
 * @param ele: element to be added
 * @param remEle: element to be deleted
*/
export function addDelEleFromArray(arr = [], ele = "", remEle = "") {
  if (ele && !arr.some((a) => a == ele)) arr.push(ele);
  if (remEle) return arr.filter((a) => a != remEle);
  return arr;
}
