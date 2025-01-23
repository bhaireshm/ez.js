import { printPretty } from "../";

describe("printPretty function", () => {
  test("should print properties of a simple object", () => {
    const inputObject = {
      id: "PS10140",
      sdid: "SD13112",
      disableCrud: false,
      newQueryParameter: true,
    };
    const spyConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});

    printPretty(inputObject);

    expect(spyConsoleLog.mock.calls[0][0]).toBe("id                : PS10140");
    expect(spyConsoleLog.mock.calls[1][0]).toBe("sdid              : SD13112");
    expect(spyConsoleLog.mock.calls[2][0]).toBe("disableCrud       : false");
    expect(spyConsoleLog.mock.calls[3][0]).toBe("newQueryParameter : true");

    spyConsoleLog.mockRestore();
  });
});
