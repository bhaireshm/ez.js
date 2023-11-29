/**
 * Check's the provided input is valid.
 *
 * @param {any} data - The input data to be checked for emptiness.
 * @returns {boolean} - Returns true if the input is empty, otherwise returns false.
 */
export default function isEmpty(data: any): boolean {
  if (typeof data === "number" || typeof data === "boolean") return false;
  if (data === "" || data === null) return true;
  if (Array.isArray(data)) return data.length === 0;
  let count = 0;
  for (const i in data) if (data.hasOwnProperty(i)) count++;
  return count === 0;
}
