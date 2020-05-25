import isDate from "./isDate";

describe("isDate", () => {
  it("2020-01-01", () => {
    expect(isDate("2020-01-01")).toBe(true);
  });
  it("2020-01", () => {
    expect(isDate("2020-01")).toBe(true);
  });
  it("2020", () => {
    expect(isDate("2020")).toBe(true);
  });
  it("1590047486000", () => {
    expect(isDate(1590047486000)).toBe(true);
  });
  it("1590047486000", () => {
    expect(isDate("1590047486000")).toBe(true);
  });
  it("1234567890987654321", () => {
    expect(isDate("1234567890987654321")).toBe(false);
  });
  it("abc", () => {
    expect(isDate("abc")).toBe(false);
  });
});
