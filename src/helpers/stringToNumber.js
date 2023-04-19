/**
 * @param {String} s
 * @returns number
 * @example console.log(toNumber("-23.32"))
 */
const toNumber = (s, returnStrings = false) =>
  isNaN(Number(s)) ? (returnStrings ? s : console.error(`${s} NaN`)) : Number(s);

/**
 * @param {Array or Object} data - required
 * @param {String} str - key names separated by comma (optional)
 * @returns array or object
 * @example strToNum(["3","4",3,"7",8])
 * @example strToNum({ a:2, b:"4", c:"5" }, "c,b")
 */
const strToNum = (data, str) => {
  if (typeof data == "object") {
    if (!str && data.length > 0) return data.map((d) => toNumber(d, true));
    if (str && data.length == undefined) {
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


module.exports = { toNumber, strToNum };