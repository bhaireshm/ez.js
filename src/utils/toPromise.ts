/**
 * Converts a callback-based function to a promise-based one.
 * @param {Function} fn - The function that uses a callback.
 * @returns {Function} - A function that returns a promise.
 */
type Callback<T, E = any> = (error: E | null, result: T | null) => void;

/**
 * Converts a callback-based function to a promise-based one.
 *
 * This utility function takes a function that follows the Node.js-style
 * callback pattern and returns a new function that returns a Promise.
 * The original function should accept a callback as its last argument,
 * and the callback should follow the signature `(error, result)`.
 *
 * @example
 * const callbackFn = (arg1, arg2, callback) => {
 *   if (arg1 === "error") callback("An error occurred", null);
 *   else callback(null, `${arg1}-${arg2}`);
 * };
 * const promiseFn = toPromise(callbackFn);
 * promiseFn("test", 123).then(console.log).catch(console.error);
 * // Output: "test-123"
 *
 * @example
 * const readFile = (path, callback) => {
 *   if (path === "invalid") callback("File not found", null);
 *   else callback(null, "File content");
 * };
 * const readFilePromise = toPromise(readFile);
 * readFilePromise("validPath").then(console.log).catch(console.error);
 * // Output: "File content"
 *
 * @param {Function} fn - The function that uses a callback.
 * @returns {Function} - A function that returns a promise.
 */
export default function toPromise<T, E = any>(
  fn: (...args: any[]) => void,
): (...args: any[]) => Promise<T> {
  return function (...args: any[]): Promise<T> {
    return new Promise((resolve, reject) => {
      const callback: Callback<T, E> = (error, result) => {
        if (error) reject(error as E);
        else resolve(result as T);
      };
      fn(...args, callback);
    });
  };
}
