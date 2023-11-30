import { AnyObject } from "../types";
import hasOwnProperty from "./hasOwnProperty";
import isEmpty from "./isEmpty";

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
  formatter: string = "",
  options: FormatterOptions = {},
): AnyObject {
  const { error = true, oldData = false } = options;
  const alterNames = String(formatter).split(",");
  const newData: AnyObject = {};
  const errors: AnyObject = {};
  const OLD_DATA = "_DATA";
  const ERRORS = "_ERROR";

  /**
   * TODO: Listed below
   * * Schema based modification
   * * New key-value pair insertion
   */

  if (isEmpty(formatter)) return obj;
  if (isEmpty(obj)) {
    newData[OLD_DATA] = obj;
    newData[ERRORS] = "data/object cannot be empty.";
    return newData;
  }

  alterNames.forEach((an) => {
    const key = String(an).split(":")[0];
    let value: any = String(an).split(":")[1];

    if (key.split(".").length === 1) {
      value = _getNestedValue(obj, String(an).split(":")[1]);
      if (value) newData[key] = value;
    } else {
      const nestedKeys = String(key).split(".");

      // Nested key's data mapping
      const nestedKeysData = dataFormatter(obj, `${nestedKeys.slice(1).join(".")}:${value}`, {
        error: false,
        oldData: false,
      });

      // Nested key's data check
      if (hasOwnProperty(newData, nestedKeys[0], true)) {
        newData[nestedKeys[0]] = { ...newData[nestedKeys[0]], ...nestedKeysData };
      } else newData[nestedKeys[0]] = nestedKeysData;
    }
  });

  if (oldData) newData[OLD_DATA] = obj;
  if (error && !isEmpty(errors)) newData[ERRORS] = errors;

  return newData;

  // Private function
  function _getNestedValue(d: AnyObject = {}, k: string = ""): any {
    if (isEmpty(d)) return null;
    const keys: string[] = String(k).split(".");
    if (!keys.length) return null;
    return (
      keys.reduce((p, c) => {
        if (hasOwnProperty(p, c, true)) return p[c];
        errors[c] = "not found";
        return null;
      }, d) ?? null
    );
  }
}
