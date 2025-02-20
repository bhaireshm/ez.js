/**
 * Checks if a given input is an object.
 *
 * @param obj - The input to be checked if it is an object.
 * @returns Returns `true` if the input is a non-empty object, otherwise `false`.
 *
 * @example
 * import isObj from "./isObj";
 *
 * const obj = { name: "John", age: 25 };
 * const result = isObj(obj);
 * console.log(result); // true
 */
export default function isObj(obj: unknown): boolean {
  return (
    obj != null &&
    (typeof obj === "object" ||
      typeof obj === "function" ||
      Object.prototype.toString.call(obj) === "[object Object]")
  );
}
