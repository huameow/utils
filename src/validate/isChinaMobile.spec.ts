import isChinaMobile from "./isChinaMobile";

describe("isChinaMobile", () => {
  it("123456789012345", () => {
    expect(isChinaMobile("123456789012345")).toBe(false);
  });
  it("15021884501", () => {
    expect(isChinaMobile("15021884501")).toBe(true);
  });
  it("05108711222", () => {
    expect(isChinaMobile("05108711222")).toBe(false);
  });
  it("08615021884501", () => {
    expect(isChinaMobile("08615021884501")).toBe(true);
  });
});
