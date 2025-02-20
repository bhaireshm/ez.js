import { currencyFormatter } from "../";

describe("currencyFormatter function", () => {
  test("should format number as currency using default options", () => {
    const result = currencyFormatter(1234567890.1997);
    expect(result).toBe("₹1,23,45,67,890.20");
  });

  test("should format number as currency using custom options", () => {
    const result = currencyFormatter(1234567890, {
      locales: "en-US",
      currency: "USD",
      maximumFractionDigits: 0,
    });
    expect(result).toBe("$1,234,567,890");
  });

  test("should format zero as currency", () => {
    const result = currencyFormatter(0);
    expect(result).toBe("₹0.00");
  });

  test("should format negative number as currency", () => {
    const result = currencyFormatter(-987654.321, {
      locales: "en-US",
      currency: "USD",
      maximumFractionDigits: 2,
    });
    expect(result).toBe("-$987,654.32");
  });
});
