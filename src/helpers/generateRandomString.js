/**
 * Generate random string of 13(default) characters, which includes all uppercase alphabets, lowercase alphabets, and 0-9 numbers. 
 * 
 * @default 13
 * @param {number} length
 * 
 * @return {string}
 */
function generateRandomString(length = 13) {
	let res = "";
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < length; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
	return res;
}

export default generateRandomString;