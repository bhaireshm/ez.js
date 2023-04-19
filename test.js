// const { addDelEleFromArrays, arrayIntoChunks, uniqueArrayOfObjects, getUniqueArray } = require("./dist/index.js");
// // const array = require("./dist/index.js");

const dataFormatter = require("./src/helpers/dataFormatter");
const isURLValid = require("./src/helpers/isURLValid");

// const {  } = require("./dist")

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];

// console.log('addDelEleFromArray', addDelEleFromArrays(arr, 0));
// console.log('arrayIntoChunks', arrayIntoChunks(arr, 2));
// console.log('uniqueArrayOfObjects', uniqueArrayOfObjects(arr));
// console.log('getUniqueArray', getUniqueArray(arr));


console.log(isURLValid("http://adsasd/asd..,asd"));

const payload = {
    id: "some-id",
    data: {
        theme: "dark"
    },
    portion: {
        id: "portion-id",
        data: {
            name: "section"
        }
    }
};

// Different format checks
// "alterName:key" or "alterName:nested.key" or "nested.alterName:key" or "nested.alterName:nested.key"
const a = dataFormatter(payload, "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block", { oldData: false });
console.log(a);