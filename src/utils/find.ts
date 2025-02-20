/**
 * Finds data within a given collection, which can be an array or an object.
 *
 * @param {T} collection - The collection to search within, can be an array or an object.
 * @param {U} data - The data to find within the collection.
 * @param {boolean} [returnType=false] - If true, returns the found data; otherwise, returns a boolean indicating presence.
 * @returns {boolean | U | null} - Returns true if data is found, false otherwise. If returnType is true, returns the found data or null.
 *
 * @template T, U
 */
function findDataInCollection<T extends object | any[], U>(
  collection: T,
  data: U,
  returnType: boolean = false,
): boolean | U | null {
  // if (Array.isArray(collection)) {
  //   for (const item of collection) {
  //     if (typeof item === 'object' && item !== null && typeof data === 'object' && data !== null) {
  //       if (Object.keys(data).every(key => item[key] === data[key])) {
  //         return returnType ? item : true;
  //       }
  //     }
  //     if (item === data) {
  //       return returnType ? item : true;
  //     }
  //   }
  // } else if (typeof collection === 'object' && collection !== null) {
  //   for (const key in collection) {
  //     if (collection.hasOwnProperty(key)) {
  //       const item = collection[key];
  //       if (typeof data === 'object' && data !== null && typeof item === 'object' && item !== null) {
  //         if (Object.keys(data).every(k => item[k] === data[k])) {
  //           return returnType ? (item as unknown as U) : true;
  //         }
  //       } else if (item === data) {
  //         return returnType ? (item as unknown as U) : true;
  //       }
  //     }
  //   }
  // }
  return returnType ? null : false;
}
