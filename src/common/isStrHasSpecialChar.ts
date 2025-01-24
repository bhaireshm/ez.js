import { SPECIAL_CHARACTERS } from "../constants";

/**
 * Checks the special characters in the provided string.
 *
 * @param str - The input string to check for special characters.
 * @param pattern - string | RegExp can be passed. The pattern of special characters to check against. Default value is SPECIAL_CHARACTERS RegExp.
 * @returns {boolean} - Returns true if the `str` contains at least one special character from the `pattern`, false otherwise.
 *
 * @example
 * console.log(isStrHasSpecialChar("hello h@rry"));
 */
export default function isStrHasSpecialChar(
  str: string,
  pattern: string | RegExp = SPECIAL_CHARACTERS,
): boolean {
  if (pattern instanceof RegExp) {
    pattern.lastIndex = 0; // Reset lastIndex to 0
    return pattern.test(str);
  }

  const specialCharPattern = new RegExp(`[${pattern.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}]`);
  return specialCharPattern.test(str);
}
