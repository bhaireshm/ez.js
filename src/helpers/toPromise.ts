/**
 * Converts a callback-based function to a promise-based one.
 * @param {Function} fn - The function that uses a callback.
 * @returns {Function} - A function that returns a promise.
 */
type Callback<T, E = any> = (error: E | null, result: T | null) => void;

export default function toPromise<T, E = any>(
  fn: (...args: any[]) => void,
): (...args: any[]) => Promise<T> {
  return function (...args: any[]): Promise<T> {
    return new Promise((resolve, reject) => {
      const callback: Callback<T, E> = (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result as T);
        }
      };
      fn(...args, callback);
    });
  };
}
