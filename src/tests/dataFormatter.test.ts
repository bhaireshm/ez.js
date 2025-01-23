import { dataFormatter } from "../";

describe("dataFormatter", () => {
  const payload = {
    id: "some-id",
    data: {
      theme: "dark",
    },
    portion: {
      id: "portion-id",
      data: {
        name: "section-wrapper",
      },
    },
  };

  it("should format data according to the given formatter", () => {
    const result = dataFormatter(
      payload,
      "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block",
    );
    expect(result).toEqual({
      pid: "some-id",
      theme: "dark",
      prtn: { id: "portion-id", name: "section-wrapper" },
      _ERROR: { block: "not found" },
    });
  });

  it("should handle an empty object", () => {
    const result = dataFormatter(
      {},
      "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block",
    );
    expect(result).toEqual({
      _DATA: {},
      _ERROR: "data/object cannot be empty.",
    });
  });

  it("should handle an empty formatter", () => {
    const result = dataFormatter(payload, "");
    expect(result).toEqual(payload);
  });

  it("should handle nested values in the formatter", () => {
    const result = dataFormatter(payload, "nested.value:data.theme");
    expect(result).toEqual({ nested: { value: "dark" } });
  });

  it("should handle non-existent keys in the formatter", () => {
    const result = dataFormatter(payload, "nonexistentkey:data.nonexistentvalue");
    expect(result).toEqual({
      _ERROR: { "data.nonexistentvalue": "not found" },
    });
  });

  it("should handle an empty input object", () => {
    const emptySchema = {
      name: "data.name",
      age: "data.age",
    };
    const emptyData = {};
    const result = dataFormatter(emptyData, emptySchema);
    expect(result).toEqual({
      _DATA: {},
      _ERROR: "data/object cannot be empty.",
    });
  });

  it("should handle non-existent nested properties", () => {
    const nonExistentSchema = {
      name: "person.name",
      age: "person.details.age",
      city: "address.city.name",
    };
    const partialData = {
      person: {
        name: "Alice",
      },
      address: {
        street: "456 Elm St",
      },
    };
    const result = dataFormatter(partialData, nonExistentSchema);
    expect(result).toEqual({
      name: "Alice",
      _ERROR: {
        "person.details.age": "not found",
        "address.city.name": "not found",
      },
    });
  });

  // it("should handle complex data structures with arrays and mixed data types", () => {
  //   const complexSchema = {
  //     id: "userId",
  //     name: "info.name",
  //     "scores.math": "results.0.score",
  //     "scores.english": "results.1.score",
  //     "address.0": "contact.addresses.0",
  //     "address.1": "contact.addresses.1",
  //     isActive: "status.active"
  //   };
  //   const complexData = {
  //     userId: 9876,
  //     info: { name: "Bob Smith" },
  //     results: [
  //       { subject: "Math", score: 95 },
  //       { subject: "English", score: 88 }
  //     ],
  //     contact: {
  //       addresses: ["123 Oak Rd", "456 Pine Ave"]
  //     },
  //     status: { active: true }
  //   };
  //   const result = dataFormatter(complexData, complexSchema);
  //   expect(result).toEqual({
  //     id: 9876,
  //     name: "Bob Smith",
  //     scores: {
  //       math: 95,
  //       english: 88
  //     },
  //     address: ["123 Oak Rd", "456 Pine Ave"],
  //     isActive: true
  //   });
  // });
});
