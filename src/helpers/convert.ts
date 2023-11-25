/**
 * Converts a given string formatted value into a number.
 *
 * @param {string} str - The string value to be converted into a number.
 * @param {boolean} returnStrings - A flag indicating whether to return the input string if it is not a valid number. Default value is `false`.
 * @returns {number | boolean} - The number value if the input string is a valid number. If the input string is not a valid number and `returnStrings` is `true`, the function returns the input string. If the input string is not a valid number and `returnStrings` is `false`, the function logs a warning message and returns ``.
 * @example
 * console.log(toNumber("-23.32")); // Output: -23.32
 * console.log(toNumber("abc")); // Output: "abc NaN"
 */
const toNumber = (str: string, returnStrings: boolean = false): number | string => {
  const result = Number(str);
  if (isNaN(result)) {
    if (returnStrings) return str;
    else {
      console.warn(`${str} NaN`);
      return "";
    }
  }
  return result;
};

/**
 * Checks the provided array or object's string formatted values and converts them to numbers.
 *
 * @param {Array | Object} data - The array or object to be converted.
 * @param {string | string[]} str - The key names separated by commas indicating which values in the object should be converted to numbers. (optional)
 * @returns {Array | Object} - The converted array or object.
 * @example
 * strToNum(["3","4",3,"7",8]);
 * // Output: [3, 4, 3, 7, 8]
 *
 * strToNum({ a:2, b:"4", c:"5" }, "c,b");
 * // Output: { a: 2, b: 4, c: 5 }
 */
const strToNum = (data: Array<any> | Object, str: string[]): Array<any> | Object => {
  if (Array.isArray(data)) return data.map((d) => toNumber(d, true));

  if (typeof data === "object" && str.length) {
    const out: any = {};
    Object.entries(data)
      .map((d) => {
        if (str.some((s: string) => s == d[0])) d[1] = toNumber(d[1], true);
        return d;
      })
      .forEach((a) => (out[a[0]] = a[1]));
    return out;
  }

  return data;
};

export { toNumber, strToNum };
