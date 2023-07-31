const { dataFormatter } = require("../../dist");

// console.log(toNumber("asd"));

// import { dataFormatter } from "@bhairesh/ez.js";

const payload = {
  id: "some-id",
  data: {
    theme: "dark",
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
  "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block",
  { oldData: false },
);
console.log(a);
