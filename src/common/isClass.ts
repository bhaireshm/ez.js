import isFn from "./isFn";

/**
 * Determines if the given instance is a class.
 *
 * @param instance - The instance to check.
 * @returns True if the instance is a class, false otherwise.
 */
export default function isClass(instance: unknown): boolean {
  return isFn(instance);
}
