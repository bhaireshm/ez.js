import isObj from "../common/isObj";
import compareObjects from "../object/compareObjects";

/**
 * Finds data within a given collection, which can be an array or an object.
 *
 * @param {T} collection - The collection to search within, can be an array or an object.
 * @param {U} data - The data to find within the collection.
 * @param {boolean} [returnType=false] - If true, returns the found data; otherwise, returns a boolean indicating presence.
 * @returns {boolean | U | null} - Returns true if data is found, false otherwise. If returnType is true, returns the found data or null.
 *
 * @template T, U
 *
 * @example
 * // Searching in an array
 * findDataInCollection([1, 2, 3], 2); // true
 * findDataInCollection([{id: 1}, {id: 2}], {id: 2}); // true
 * findDataInCollection([1, 2, 3], 4); // false
 * findDataInCollection([{id: 1}, {id: 2}], {id: 3}, true); // null
 * findDataInCollection([{id: 1}, {id: 2}], {id: 1}, true); // {id: 1}
 *
 * @example
 * // Searching in an object
 * findDataInCollection({a: 1, b: 2}, 2); // true
 * findDataInCollection({user: {name: 'John'}}, {name: 'John'}); // true
 * findDataInCollection({a: 1, b: 2}, 3); // false
 * findDataInCollection({user: {name: 'John'}}, {name: 'Jane'}, true); // null
 * findDataInCollection({user: {name: 'John'}}, {name: 'John'}, true); // {name: 'John'}
 */
export default function findDataInCollection<T extends object | any[], U>(
  collection: T,
  data: U,
  returnType: boolean = false,
): boolean | U | null {
  if (Array.isArray(collection)) {
    for (const item of collection) {
      const areObjects = isObj(item) && isObj(data);
      if (
        (areObjects && compareObjects(item as object, data as object)) ||
        (!areObjects && item === data)
      ) {
        return returnType ? (item as U) : true;
      }
    }
  } else if (isObj(collection)) {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        const value = (collection as any)[key];
        const areObjects = isObj(value) && isObj(data);
        if (
          (areObjects && compareObjects(value as object, data as object)) ||
          (!areObjects && value === data)
        ) {
          return returnType ? (value as U) : true;
        }
      }
    }
  }

  return returnType ? null : false;
}
