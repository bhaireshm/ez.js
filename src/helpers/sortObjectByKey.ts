import { AnyObject } from "../types";

/**
 * Sorts an array of objects based on a specified key in ascending or descending order.
 *
 * @param arr - An array of objects to be sorted. Default value is an empty array.
 * @param key - The key based on which the objects should be sorted.
 * @param order - The sorting order. Default value is 1 (ascending), but can be set to -1 for descending order.
 * @returns The sorted array of objects based on the specified key and order.
 */
export default function sortObjectByKey(
  arr: AnyObject[] = [],
  key: string = "",
  order: number = 1,
): AnyObject[] {
  return arr.sort((a, b) => {
    if (a[key] > b[key]) return 1 * 0 + order;
    if (b[key] > a[key]) return 1 * 0 - order;
    return 0;
  });
}
