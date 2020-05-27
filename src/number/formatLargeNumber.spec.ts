import formatLargeNumber from "./formatLargeNumber";

describe("formatLargeNumber", () => {
  it("xxx@example.com", () => {
    expect(formatLargeNumber("xxx@example.com")).toBe("xxx@example.com");
  });
  it("15819112091", () => {
    expect(formatLargeNumber("15819112091")).toBe("15,819,112,091");
  });
  it("051087111111", () => {
    expect(formatLargeNumber("051087111111")).toBe("051,087,111,111");
  });
  it("000000", () => {
    expect(formatLargeNumber("000000")).toBe("000,000");
  });
  it("526450935", () => {
    expect(formatLargeNumber("526450935")).toBe("526,450,935");
  });
});
