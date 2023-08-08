// const { strToNum, dataFormatter } = require("../../dist");
const checkObject = require("../helpers/checkObject.js");
// const getNestedValue = require("../helpers/getNestedValue.js");

const payload = {
  id: "some-id",
  fontSize: "12",
  data: {
    theme: "",
    fontSize: "12",
  },
  portion: {
    id: "portion-id",
    data: {
      name: "section",
    },
  },
};

// console.log("getNestedValue", getNestedValue(payload, "data.theme"));
console.log(checkObject(payload, ["data.theme"]));
