/**
 * @param {any string} str
 */
export const camelCase = (str) => str.replace(/(^|\s)\S/g, (t) => t.toUpperCase());