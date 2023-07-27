const hasOwnProperty = require("../helpers/hasOwnProperty.js");

console.log(hasOwnProperty({ 'a': 1, 'b': 2, 'c': 3 }, "a,c"));