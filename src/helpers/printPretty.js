/**
 * @param obj - accepts only object
 * @example let obj = { id: "PS10140", sdid: "SD13112", disableCrud: "false", newQueryParameter: "true" };
 * printPretty(obj);
 */
function printPretty(obj) {
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

    // todo: implement nested logging
    // if (typeof obj[k] === "object") {
    //   s = "";
    //   console.log(k);
    //   printPretty(obj[k]);
    // } else
    console.log(`${k}${s} : ${obj[k]}`);
  }
}

module.exports = printPretty;
