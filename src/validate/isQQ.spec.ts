import isQQ from "./isQQ";

describe("isQQ", () => {
  it("xxx@example.com", () => {
    expect(isQQ("xxx@example.com")).toBe(false);
  });
  it("15819112091", () => {
    expect(isQQ("15819112091")).toBe(false);
  });
  it("051087111111", () => {
    expect(isQQ("051087111111")).toBe(false);
  });
  it("000000", () => {
    expect(isQQ("000000")).toBe(false);
  });
  it("526450935", () => {
    expect(isQQ("526450935")).toBe(true);
  });
});
