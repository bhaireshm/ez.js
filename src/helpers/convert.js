/**
 * Converts given string formatted value into number.
 *
 * @param {string} str
 * @param {boolean} returnStrings
 *
 * @returns {number | boolean}
 * @example console.log(toNumber("-23.32"))
 */
const toNumber = (str, returnStrings = false) =>
  isNaN(Number(str)) ? (returnStrings ? str : console.warn(`${str} NaN`)) : Number(str);

/**
 * Checks the provided array or an object's string formatted value into number.
 *
 * @param {Array | Object} data - required
 * @param {string | string[]} str - key names separated by comma (optional)
 * @returns {Array | object}
 * @example strToNum(["3","4",3,"7",8])
 * @example strToNum({ a:2, b:"4", c:"5" }, "c,b")
 */
const strToNum = (data, str) => {
  if (typeof data == "object") {
    if (Array.isArray(data)) return data.map((d) => toNumber(d, true));
    if (typeof data === "object") {
      const out = {};
      Object.entries(data)
        .map((d) => {
          if (str.split(",").some((s) => s == d[0])) d[1] = toNumber(d[1], true);
          return d;
        })
        .forEach((a) => (out[a[0]] = a[1]));
      return out;
    }
  }
};

export { toNumber, strToNum };
