/**
 * Checks the special characters in the provided string.
 *
 * @param str - The input string to check for special characters.
 * @param pattern - string | RegExp can be passed. The pattern of special characters to check against. Default value is "<>@!#$%^&*()_+[]{}?:;\\|'\"\\,./~`-=".
 * @returns {boolean} - Returns true if the `str` contains at least one special character from the `pattern`, false otherwise.
 *
 * @example
 * console.log(isStrHasSpecialChar("hello h@rry"));
 */
export default function isStrHasSpecialChar(
  str: string,
  pattern = "<>@!#$%^&*()_+[]{}?:;\\|'\"\\,./~`-="
  ,
): boolean {
  // if (isNum(pattern) || isObj(pattern)) return false;
  // if (isRegExp(pattern)) pattern = pattern?.source;
  return pattern.split("").some((s: string) => str.includes(s));
}
