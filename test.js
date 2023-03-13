const { addDelEleFromArrays, arrayIntoChunks, uniqueArrayOfObjects, getUniqueArray } = require("./src/Array.js");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];

console.log('addDelEleFromArray', addDelEleFromArrays(arr, 0));
console.log('arrayIntoChunks', arrayIntoChunks(arr, 2));
console.log('uniqueArrayOfObjects', uniqueArrayOfObjects(arr));
console.log('getUniqueArray', getUniqueArray(arr));