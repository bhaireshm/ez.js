/**
 * Checks if a value is a Buffer.
 *
 * @param {any} val - The value to be checked.
 * @return {boolean} True if the value is a Buffer, false otherwise.
 */
export default function isBuffer(val: any): boolean {
  return Boolean(
    val?.constructor &&
      typeof val.constructor?.isBuffer === "function" &&
      val.constructor.isBuffer(val),
  );
}
