const { strToNum, dataFormatter } = require("../../dist");
// const { strToNum } = require("../helpers/convert.js");

const payload = {
  id: "some-id",
  fontSize: "12",
  data: {
    theme: "dark",
    fontSize: "12",
  },
  portion: {
    id: "portion-id",
    data: {
      name: "section",
    },
  },
};

// console.log('getNestedValue()', getNestedValue(payload, "portion.data"))
// Different format checks
// "alterName:key" or "alterName:nested.key" or "nested.alterName:key" or "nested.alterName:nested.key"
const a = dataFormatter(
  payload,
  // "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block",
  { oldData: false },
);
console.log(a, strToNum(payload, "data.fontSize"));
