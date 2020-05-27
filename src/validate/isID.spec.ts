import isID from "./isID";

describe("idID", () => {
  it("wudbhagsdhh dgshahsd", () => {
    expect(isID("wudbhagsdhh dgshahsd")).toBe(false);
  });
  it("123", () => {
    expect(isID("123")).toBe(false);
  });
  it("123216789191679128", () => {
    expect(isID("123216789191679128")).toBe(false);
  });
});
