import hasChinese from "./hasChinese";

describe("hasChinese", () => {
  it("wudbhagsdhh dgshahsd", () => {
    expect(hasChinese("wudbhagsdhh dgshahsd")).toBe(false);
  });
  it("wudbhagsdhh中文dgshahsd", () => {
    expect(hasChinese("wudbhagsdhh中文dgshahsd")).toBe(true);
  });
});
