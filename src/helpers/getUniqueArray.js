/**
 * @param {Array} arr
 */
export default function getUniqueArray(arr = []) {
	const uArr = [];
	arr.forEach((a) => {
		if (uArr.indexOf(a) === -1) uArr.push(a);
	});
	return uArr;
}