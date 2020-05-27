import isEmail from "./isEmail";

describe("isEmail", () => {
  it("xxx@example.com", () => {
    expect(isEmail("xxx@example.com")).toBe(true);
  });
  it("wudbhagsdhh中文dgshahsd", () => {
    expect(isEmail("wudbhagsdhh中文dgshahsd")).toBe(false);
  });
});
