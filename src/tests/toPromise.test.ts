import toPromise from "../helpers/toPromise";

describe("toPromise", () => {
  it("should resolve the promise with the result when the callback is called with no error", async () => {
    const callbackFn = (
      arg1: string,
      arg2: number,
      callback: (err: any, result: string) => void,
    ) => {
      callback(null, "success");
    };
    const fn = toPromise(callbackFn);
    const result = await fn("test", 123);
    expect(result).toBe("success");
  });

  it("should reject the promise with the error when the callback is called with an error", async () => {
    const callbackFn = (
      arg1: string,
      arg2: number,
      callback: (err: any, result: string | null) => void,
    ) => {
      callback("error", null);
    };
    const fn = toPromise(callbackFn);
    await expect(fn("test", 123)).rejects.toBe("error");
  });

  it("should pass the arguments to the original function", async () => {
    const callbackFn = (
      arg1: string,
      arg2: number,
      callback: (err: any, result: string) => void,
    ) => {
      callback(null, `${arg1}-${arg2}`);
    };
    const fn = toPromise(callbackFn);
    const result = await fn("test", 123);
    expect(result).toBe("test-123");
  });
});
