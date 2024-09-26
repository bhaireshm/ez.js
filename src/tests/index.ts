import { mergeObjects } from "../helpers";

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

const projectJSON = {
  $schema: "https://brikcase.s3.amazonaws.com/apf/project.schema.json",
  template: {
    id: "",
    name: "",
    category: "",
    description: "",
  },
  pages: [
    {
      pageName: "Home",
      pageData: [
        {
          type: "grid",
          style: {},
          cols: [
            {
              colspan: "12",
              style: {},
              colData: [
                {
                  type: "unset",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  config: {
    theme: {},
    redux: {},
  },
};

const result = mergeObjects({ template: { name: "test" } }, projectJSON);
console.log("result", result);
