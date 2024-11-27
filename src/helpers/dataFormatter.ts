import { AnyObject } from "../types";
import hasOwnProperty from "./hasOwnProperty";
import isEmpty from "./isEmpty";
import isNotNull from "./isNotNull";
import isStr from "./isStr";

interface FormatterOptions {
  error?: boolean;
  oldData?: boolean;
}

/**
 * Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.
 *
 * @param obj - data to be formatted
 * @param formatter - key:valuePath, each key value is separated by comma
 * @example "alterName:key" or "alterName:nested.key" or "nested.alterName:key" or "nested.alterName:nested.key"
 * @param options
 * @param options.error - default true, returns error content if any key or value is not found
 * @param options.oldData - default true, returns object
 * @returns return modified object along with the provided object
 *
 * @example
 * const payload = {
 *   id: "some-id",
 *   data: {
 *     theme: "dark"
 *   },
 *   portion: {
 *     id: "portion-id",
 *     data: {
 *       name: "section-wrapper"
 *     }
 *   }
 * };
 * const a = dataFormatter(payload, "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block", { oldData: false });
 *
 * console.log(a);
 * output:
 * {
 *   pid: 'some-id',
 *   theme: 'dark',
 *   prtn: { id: 'portion-id', name: 'section' },
 *   ERRORS: { block: 'not found' }
 * }
 */
export default function dataFormatter(
  obj: AnyObject = {},
  formatter: string | object = "",
  options: FormatterOptions = {},
): AnyObject {
  const { error = true, oldData = false } = options;

  const alterNames = isStr(formatter)
    ? String(formatter).split(",")
    : Object.entries(formatter).map(([k, v]) => `${k}:${v}`);

  const newData: AnyObject = {};
  const errors: AnyObject = {};
  const OLD_DATA = "_DATA";
  const ERRORS = "_ERROR";

  if (isEmpty(formatter)) return obj;
  if (isEmpty(obj)) {
    return {
      [OLD_DATA]: obj,
      [ERRORS]: "data/object cannot be empty.",
    };
  }

  alterNames.forEach((an) => {
    const [key, valuePath] = an.split(":");
    const nestedKeys = key.split(".");

    if (nestedKeys.length === 1) {
      const value = _getNestedValue(obj, valuePath);
      if (isNotNull(value)) {
        newData[key] = value;
      } else if (valuePath.includes(":")) {
        // New key-value pair insertion
        const [_, newValue] = valuePath.split(":");
        newData[key] = newValue;
      }
    } else {
      let currentObj = newData;

      // Nested key's data mapping
      for (let i = 0; i < nestedKeys.length - 1; i++) {
        if (!currentObj[nestedKeys[i]]) {
          currentObj[nestedKeys[i]] = {};
        }
        currentObj = currentObj[nestedKeys[i]];
      }
      const value = _getNestedValue(obj, valuePath);
      if (isNotNull(value)) {
        currentObj[nestedKeys[nestedKeys.length - 1]] = value;
      } else if (valuePath.includes(":")) {
        // New key-value pair insertion for nested objects
        const [_, newValue] = valuePath.split(":");
        currentObj[nestedKeys[nestedKeys.length - 1]] = newValue;
      }
    }
  });

  const result: AnyObject = { ...newData };

  if (oldData) result[OLD_DATA] = obj;
  if (error && !isEmpty(errors)) result[ERRORS] = errors;

  return result;

  // Private function
  function _getNestedValue(d: AnyObject = {}, k: string = ""): any {
    if (isEmpty(d)) return null;
    const keys: string[] = String(k).split(".");
    if (!keys.length) return null;
    return (
      keys.reduce((p, c) => {
        if (hasOwnProperty(p, c, true)) return p[c];
        if (!k.includes(":")) {
          errors[k] = "not found";
        }
        return null;
      }, d) ?? null
    );
  }
}

// Example usage:
/*
const payload = {
  id: "user-123",
  profile: {
    name: "John Doe",
    age: 30
  },
  settings: {
    theme: "dark",
    notifications: true
  }
};

const formattedData = dataFormatter(
  payload,
  "userId:id,fullName:profile.name,userTheme:settings.theme,email:contact.email",
  { error: true, oldData: true }
);

console.log(formattedData);
// Output:
// {
//   userId: "user-123",
//   fullName: "John Doe",
//   userTheme: "dark",
//   _DATA: { ... }, // Original payload
//   _ERROR: { email: "not found" }
// }
*/
