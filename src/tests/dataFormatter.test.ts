import dataFormatter from "../helpers/dataFormatter";

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
      _ERROR: { nonexistentvalue: "not found" },
    });
  });
});
