type NumberFormatOptions = Intl.NumberFormatOptions & { locales?: string };

/**
 * Converts a number into a formatted currency value.
 *
 * @param {number} val - The number to be formatted as currency.
 * @param {NumberFormatOptions} options - An object with some or all of the properties of Intl.NumberFormatOptions.
 * @returns {string} - The formatted value as a string.
 *
 * @example
 * console.log(currencyFormatter(1234567890.1997)); // ₹1,23,45,67,890.20
 * console.log(currencyFormatter(1234567890, {locales: "en-US", currency: "USD", maximumFractionDigits: 0})); // $1,234,567,890
 *
 * @link Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
 */
export default function currencyFormatter(val: number, options: NumberFormatOptions = {}): string {
  options = {
    currency: "INR",
    style: "currency",
    maximumFractionDigits: 2,
    locales: options?.locales ?? "en-IN",
    ...options,
  };
  return new Intl.NumberFormat(options.locales, options).format(val);
}
