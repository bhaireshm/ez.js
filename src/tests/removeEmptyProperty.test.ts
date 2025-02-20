import { removeEmptyProperty } from "../";

describe("removeEmptyProperty function", () => {
  test("should remove empty properties from a simple object", () => {
    const inputObject = {
      id: "PS10140",
      sdid: "",
      disableCrud: false,
      newQueryParameter: null,
    };

    const result = removeEmptyProperty(inputObject);

    expect(result).toEqual({
      id: "PS10140",
      disableCrud: false,
    });
  });

  test("should remove empty properties from nested objects and arrays", () => {
    const inputObject = {
      id: "PS10140",
      sdid: "",
      disableCrud: false,
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

    expect(result).toEqual({
      id: "PS10140",
      disableCrud: false,
      nested: {
        prop2: {
          subProp2: "value",
        },
      },
      arrayProp: [
        {
          subProp: "value",
        },
      ],
    });
  });
});
