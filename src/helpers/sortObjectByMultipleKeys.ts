import { AnyObject } from "../types";

/**
 * Sorts an array of objects based on multiple keys.
 *
 * @param arr - The array of objects to be sorted.
 * @param keys - The keys to sort the objects. Prefix a key with a hyphen (-) to sort in descending order.
 * @returns The sorted array of objects.
 *
 * @example
 * const object = [
 *   { name: 'John', date: '2021-01-01' },
 *   { name: 'Alice', date: '2021-02-01' },
 *   { name: 'Bob', date: '2021-01-15' }
 * ];
 *
 * const sortedArray = sortObjectByMultipleKeys(object, ['name', '-date']);
 * console.log(sortedArray);
 * // Output: [
 * //   { name: 'Alice', date: '2021-02-01' },
 * //   { name: 'Bob', date: '2021-01-15' },
 * //   { name: 'John', date: '2021-01-01' }
 * // ]
 */
export default function sortObjectByMultipleKeys(
  arr: AnyObject[] = [],
  keys: string[] = [],
): AnyObject[] {
  return arr.sort((a, b) => {
    return keys
      .map((o) => {
        let dir = 1;
        if (o.startsWith("-")) {
          dir = -1;
          o = o.substring(1);
        }
        if (a[o] > b[o]) return dir;
        if (a[o] < b[o]) return -dir;
        return 0;
      })
      .reduce((p, n) => (p ? p : n), 0);
  });
}
