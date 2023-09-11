/**
 * Prints the properties of an object in a formatted way.
 *
 * @param {object} obj - The object whose properties need to be printed.
 * @returns {void}
 *
 * @example
 * let obj = {
 *   id: "PS10140",
 *   sdid: "SD13112",
 *   disableCrud: "false",
 *   newQueryParameter: "true"
 * };
 * printPretty(obj);
 *
 * // Output
 * // id                : PS10140
 * // sdid              : SD13112
 * // disableCrud       : false
 * // newQueryParameter : true
 */
function printPretty(obj, indent = 0) {
  const l = ((o) => {
    let w = 0;
    for (let k in o) {
      let l = `${k}`.length;
      w = l > w ? l : w;
    }
    return w;
  })(obj);

  for (let k in obj) {
    let s = " ".repeat(l - `${k}`.length);
    if (typeof obj[k] === "object" && obj[k] !== null) {
      console.log(`${" ".repeat(indent)}${k}${s} :`);
      printPretty(obj[k], indent + 2);
    } else {
      console.log(`${" ".repeat(indent)}${k}${s} : ${obj[k]}`);
    }
  }
}

module.exports = printPretty;
