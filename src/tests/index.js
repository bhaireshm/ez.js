const dataFormatter = require("../helpers/dataFormatter.js");
const isURLValid = require('../helpers/isURLValid.js');

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