/**
 * Checks if a given string is a valid URL.
 *
 * @param {string} url - The URL to be validated.
 * @returns {boolean} - True if the URL is valid, false otherwise.
 */
export default function isURLValid(url: string): boolean {
  return new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i", // ignore case
  ).test(url);
}
