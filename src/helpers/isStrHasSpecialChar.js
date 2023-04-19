/**
 * @param {String} str
 * @param {String} pattern - regexp pattern.
 * @example console.log(isStrHasSpecialChar("hello h@rry"))
 */
const isStrHasSpecialChar = (str, pattern = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=") =>
    pattern.split("").map(s => str.indexOf(s) > -1).includes(true);

module.exports = isStrHasSpecialChar;