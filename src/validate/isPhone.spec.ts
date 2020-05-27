import isPhone from "./isPhone";

describe("isPhone", () => {
  it("xxx@example.com", () => {
    expect(isPhone("xxx@example.com")).toBe(false);
  });
  it("15819112091", () => {
    expect(isPhone("15819112091")).toBe(false);
  });
  it("051087111111", () => {
    expect(isPhone("051087111111")).toBe(true);
  });
});
