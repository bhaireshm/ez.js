/**
 * Checks if the provided instance is a function.
 *
 * @param instance - The instance to be checked.
 * @returns `true` if the instance is a function, `false` otherwise.
 *
 * @example
 * const func = () => {};
 * const obj = {};
 *
 * console.log(isFn(func)); // true
 * console.log(isFn(obj));  // false
 */
export default function isFn(instance: unknown): boolean {
  return Boolean(instance != null && typeof instance === "function");
}
