/**
 * Check's the special characters in the provided string.
 *
 * @param {string} str
 * @param {string} pattern - regexp pattern.
 * @returns {boolean}
 *
 * @example
 * console.log(isStrHasSpecialChar("hello h@rry"));
 */
function isStrHasSpecialChar(str, pattern = "<>@!#$%^&*()_+[]{}?:;\\|'\"\\,./~`-=") {
  return pattern
    .split("")
    .map((s) => str.indexOf(s) > -1)
    .includes(true);
}

export default isStrHasSpecialChar;
