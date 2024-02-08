export default function titleCase(str: string): string {
  // Handle empty string
  if (!str.trim()) return str;

  // Trim leading and trailing spaces, split into words and Convert to PascalCase
  return str
    .trim()
    .split(/\s+/)
    .map((w) => w.replace(/(^|\s)\S/g, (t) => t.toUpperCase()))
    .join("");
}
