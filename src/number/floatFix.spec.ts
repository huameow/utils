import floatFix from "./floatFix";

describe("floatFix", () => {
  it("xxx@example.com", () => {
    expect(floatFix("xxx@example.com")).toBe("xxx@example.com");
  });
  it("15819112091", () => {
    expect(floatFix("15819112091")).toBe("15819112091.00");
  });
  it("051087111111", () => {
    expect(floatFix("051087111111")).toBe("51087111111.00");
  });
  it("000000", () => {
    expect(floatFix("000000")).toBe("0.00");
  });
  it("526450935", () => {
    expect(floatFix("526450935")).toBe("526450935.00");
  });
});
