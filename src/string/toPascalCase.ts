/**
 * Converts a string to PascalCase format.
 * @param str - The input string to be converted to PascalCase.
 * @param removeSpecialChars - If set to true, any special characters in the string will be removed before conversion.
 * @returns The input string converted to PascalCase format.
 */
export default function toPascalCase(str: string, removeSpecialChars: boolean = false): string {
  // Handle empty string
  if (!str.trim()) return str;

  // Remove special characters if specified
  if (removeSpecialChars) str = str.replace(/[-_]+/g, " ").replace(/[^\w\s]/gi, "");

  // Trim leading and trailing spaces, split into words and Convert to PascalCase
  return str
    .trim()
    .split(/\s+/)
    .map((w) => w.replace(/(^|\s)\S/g, (t) => t.toUpperCase()))
    .join("");
}
