/**
 * Checks if `str` is a `String` type.
 * 
 * @category String
 * @param {string} str 
 * @returns {boolean}
 */
function isStr(str) {
	return str && typeof str === "string";
}

export default isStr;