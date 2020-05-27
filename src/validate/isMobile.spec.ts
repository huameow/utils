import isMobile from "./isMobile";

describe("isMobile", () => {
  it("xxx@example.com", () => {
    expect(isMobile("xxx@example.com")).toBe(false);
  });
  it("15819112091", () => {
    expect(isMobile("15819112091")).toBe(true);
  });
});
