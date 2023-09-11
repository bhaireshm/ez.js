// const { strToNum, dataFormatter } = require("../../dist");
const printPretty = require("../helpers/printPretty.js");
// const getNestedValue = require("../helpers/getNestedValue.js");

const payload = {
  id: "some-id",
  fontSize: "12",
  data: {
    theme: "dark",
    fontSize: "12",
  },
  portion: {
    id: "pid123",
    data: {
      name: "section",
    },
  },
};

// console.log("getNestedValue", getNestedValue(payload, "data.theme"));
// console.log(checkObject(payload, ["data.theme"]));

console.log(printPretty(payload));
