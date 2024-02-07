/**
 * Converts a string to snake case.
 *
 * @param str - The input string that needs to be converted to snake case.
 * @returns The input string converted to snake case.
 *
 * @example
 * const input = "helloWorld";
 * const output = toSnakeCase(input);
 * console.log(output); // Output: "hello_world"
 */
export default function toSnakeCase(str: string): string {
  // Handle empty string
  if (!str.trim()) return str;

  return str
    // Trim leading and trailing spaces
    .trim()

    // Insert underscore before lowercase letters and after underscores
    .replace(/([A-Z])(?=[a-z])|_/g, (match, char) => (char ? "_" + char.toLowerCase() : match))

    // Convert everything to lowercase
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
