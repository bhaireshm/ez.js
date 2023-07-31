/**
 * Converts number into formatted currency value.
 *
 * @param {Number} val - Integer value
 * @param {Intl.NumberFormatOptions} options - An object with some or all of the properties of Intl.NumberFormatOptions
 * @returns {string} formatted value.
 *
 * @example
 * console.log(currencyFormatter(1234567890.1997)); // ₹1,23,45,67,890.20
 * console.log(currencyFormatter(1234567890, {locales: "en-US", currency: "USD", maximumFractionDigits: 0})); // $1,234,567,890
 *
 * @link Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
 */
function currencyFormatter(val, options = {}) {
  options = {
    currency: "INR",
    style: "currency",
    maximumFractionDigits: 2,
    locales: options?.locales || "en-IN",
    ...options,
  };
  return new Intl.NumberFormat(options.locales, options).format(val);
}

module.exports = currencyFormatter;
