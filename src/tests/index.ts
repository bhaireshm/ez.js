import removeEmptyProperty from "../helpers/removeEmptyProperty";

const inputObject = {
  id: [],
  sdid: "",
  qwr: undefined,
  disableCrud: 0,
  nested: {
    prop1: "",
    prop2: {
      subProp1: null,
      subProp2: "value",
    },
  },
  arrayProp: [
    {
      subProp: "",
    },
    {
      subProp: "value",
    },
  ],
};

const result = removeEmptyProperty(inputObject);
console.log("result", result);
