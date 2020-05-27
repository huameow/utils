import idID from "./isID";

describe("idID", () => {
  it("wudbhagsdhh dgshahsd", () => {
    expect(idID("wudbhagsdhh dgshahsd")).toBe(false);
  });
  it("123", () => {
    expect(idID("123")).toBe(false);
  });
  it("123216789191679128", () => {
    expect(idID("123216789191679128")).toBe(false);
  });
});
