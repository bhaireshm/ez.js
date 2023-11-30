import isObj from "./isObj";

/**
 * Prints the properties of an object in a formatted way.
 *
 * @param {object} obj - The object whose properties need to be printed.
 * @param {number} indent - The number of spaces to indent. Default is 0.
 * @returns {void}
 */
export default function printPretty(obj: any, indent: number = 0): void {
  const calculateMaxKeyLength = (o: any): number => {
    let maxKeyLength = 0;
    for (let key in o) {
      let keyLength = `${key}`.length;
      maxKeyLength = keyLength > maxKeyLength ? keyLength : maxKeyLength;
    }
    return maxKeyLength;
  };

  const maxKeyLength = calculateMaxKeyLength(obj);

  for (let key in obj) {
    let spaces = " ".repeat(maxKeyLength - `${key}`.length);
    if (isObj(obj[key])) {
      console.log(`${" ".repeat(indent)}${key}${spaces} :`);
      printPretty(obj[key], indent + 2);
    } else {
      console.log(`${" ".repeat(indent)}${key}${spaces} : ${obj[key]}`);
    }
  }
}
