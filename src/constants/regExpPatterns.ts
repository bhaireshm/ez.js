/**
 * Regular expression to match special characters.
 *
 * @constant
 * @type {RegExp}
 */
export const SPECIAL_CHARACTERS: RegExp = /[!@#%^&*()_+-=[]{}|;':\\",.\/<>?~`]/g;

/**
 * Regular expression to match numbers.
 *
 * @constant
 * @type {RegExp}
 */
export const NUMBERS: RegExp = /[\\d]/g;

/**
 * Regular expression to match alphabets.
 *
 * @constant
 * @type {RegExp}
 */
export const ALPHABETS: RegExp = /[a-zA-Z]/g;

/**
 * Regular expression to match capital letters.
 *
 * @constant
 * @type {RegExp}
 */
export const CAPITAL_LETTERS: RegExp = /[A-Z]/g;

/**
 * Regular expression to match small letters.
 *
 * @constant
 * @type {RegExp}
 */
export const SMALL_LETTERS: RegExp = /[a-z]/g;

/**
 * Regular expression to match alphanumeric characters.
 *
 * @constant
 * @type {RegExp}
 */
export const ALPHANUMERIC: RegExp = /[^a-zA-Z0-9]/g;
