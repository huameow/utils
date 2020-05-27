import isURL from "./isURL";

describe("isURL", () => {
  it("xxx@example.com", () => {
    expect(isURL("xxx@example.com")).toBe(false);
  });
  it("15819112091", () => {
    expect(isURL("15819112091")).toBe(false);
  });
  it("051087111111", () => {
    expect(isURL("051087111111")).toBe(false);
  });
  it("000000", () => {
    expect(isURL("000000")).toBe(false);
  });
  it("http://", () => {
    expect(isURL("http://")).toBe(false);
  });
  it("http://www", () => {
    expect(isURL("http://www")).toBe(false);
  });
  it("http://www.baidu", () => {
    expect(isURL("http://www.baidu")).toBe(true);
  });
  it("http://www.baidu.com", () => {
    expect(isURL("http://www.baidu.com")).toBe(true);
  });
});
