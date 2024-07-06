import { isRegExp, removeEmptyProperty } from "../helpers";

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

function isObj(obj: unknown): boolean {
  return obj != null && (typeof obj === 'object' || typeof obj === "function" || Object.prototype.toString.call(obj) === "[object Object]");
}

let a = {};

if (isObj(a)) log(a.b);

function log(n: string) {
  console.log("result", n);
}
