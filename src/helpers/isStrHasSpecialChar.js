/**
 * Check's the special characters in the provided string.
 *
 * @param {string} str - The input string to check for special characters.
 * @param {string} pattern - The pattern of special characters to check against. Default value is "<>@!#$%^&*()_+[]{}?:;\|'"\,./~`-=".
 * @returns {boolean} - Returns true if the `str` contains at least one special character from the `pattern`, false otherwise.
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

module.exports = isStrHasSpecialChar;
