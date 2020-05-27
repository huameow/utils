import isPostalCode from "./isPostalCode";

describe("isPostalCode", () => {
  it("xxx@example.com", () => {
    expect(isPostalCode("xxx@example.com")).toBe(false);
  });
  it("15819112091", () => {
    expect(isPostalCode("15819112091")).toBe(false);
  });
  it("051087111111", () => {
    expect(isPostalCode("051087111111")).toBe(false);
  });
  it("000000", () => {
    expect(isPostalCode("000000")).toBe(true);
  });
});
