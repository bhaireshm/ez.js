import { removeEmptyProperty, isClass, isEmpty, } from "../helpers";

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

function a(b?: string) {
  // if (!isEmpty(b)) return b.replace("/", "")
}

console.log('isClass(null)', isClass(null))
