/**
 * @param {string} str 
 * @param {number} len - default is 50 
 */
const shortenString = (str = "", len = 50) => {
	if (str.length > len) return str.substring(0, len);
	return str;
};

module.exports = shortenString;