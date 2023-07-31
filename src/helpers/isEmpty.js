/**
 * Check's the provided input is valid.
 * 
 * @param {any} data
 * @returns {boolean}
 */
function isEmpty(data) {
	if (typeof data == "number" || typeof data == "boolean") return false;
	if (typeof data == "undefined" || data === null) return true;
	if (typeof data.length != "undefined") return data.length == 0;
	let count = 0;
	for (let i in data) if (data.hasOwn(i)) count++;
	return count == 0;
}

export default isEmpty;