/**
 * Converts a string to snake case.
 *
 * @param str - The input string that needs to be converted to snake case.
 * @returns The input string converted to snake case.
 *
 * @example
 * toSnakeCase("helloWorld"); // "hello_world"
 * toSnakeCase("PascalCaseString"); // "pascal_case_string"
 * toSnakeCase("String with Spaces"); // "string_with_spaces"
 * toSnakeCase("stringWith1Number"); // "string_with_1_number"
 * toSnakeCase("string-with_special!chars"); // "string_with_special_chars"
 */
export default function toSnakeCase(str: string): string {
  if (!str.trim()) return str;

  return str
    .trim()
    .replace(/[^a-zA-Z0-9]/g, " ") // Replace non-alphanumeric with space
    .replace(/([a-z])(\d)/g, "$1 $2") // Add space between letter and digit
    .replace(/(\d)([a-zA-Z])/g, "$1 $2") // Add space between digit and letter
    .replace(/([a-z\d])([A-Z])/g, "$1 $2") // Add space before uppercase in camelCase/PascalCase
    .replace(/\s+/g, "_") // Replace multiple spaces with single underscore
    .toLowerCase();
}

// export default function toSnakeCase(str: string): string {
//   // return str.toLowerCase().replace(/[A-Z]/g, (match) => `_${match}`);
//   // }
//   // export default function toPascalCase(str: string, removeSpecialChars: boolean = false): string {
//   // Handle empty string
//   if (!str.trim()) return str;

//   return str
//     // Trim leading and trailing spaces,
//     .trim()
//     // Remove special characters if specified
//     // .replace(/\s+/g, ' ')
//     .replace(/[A-Z]/g, ' ')
//     .split(/\s+/)
//     .join("_")
//     .toLowerCase()
// }
