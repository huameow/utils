import toDate from "./toDate";

describe("toDate", () => {
  it("2020-01-01", () => {
    expect(toDate("2020-01-01")).toBe(new Date("2020-01-01").getTime());
  });
  it("2020-01", () => {
    expect(toDate("2020-01")).toBe(new Date("2020-01").getTime());
  });
  it("2020", () => {
    expect(toDate("2020")).toBe(new Date("2020").getTime());
  });
  it("1234567890987654321", () => {
    expect(toDate("1234567890987654321")).toBe(0);
  });
  it("abc", () => {
    expect(toDate("abc")).toBe(0);
  });
});
