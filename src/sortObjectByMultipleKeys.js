/**
 * Sort array of objects by key(s)
 *
 * @param {Object[]} arr - Array of Objects
 * @param {String[]} keys - Key's to be sorted. [pass hyphen(-) in front of string to order in descending]
 * @example sortObjectByMultipleKeys(object, ["name", "-date"])
 * @example sortObjectByMultipleKeys(object, ["-name", "date"])
 *
 * @returns Sorted array of objects.
 */
export const sortObjectByMultipleKeys = (arr = [], keys = []) => {
  return arr.sort((a, b) => {
    return keys
      .map((o) => {
        let dir = 1;
        if (o[0] === "-") {
          dir = -1;
          o = o.substring(1);
        }
        if (a[o] > b[o]) return dir;
        if (a[o] < b[o]) return -dir;
        return 0;
      })
      .reduce((p, n) => (p ? p : n), 0);
  });
};