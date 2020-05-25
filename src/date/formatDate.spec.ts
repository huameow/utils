import moment from "moment";
import formatDate from "./formatDate";

describe("formatDate", () => {
  it("have no params", () => {
    expect(formatDate()).toBe(moment().format("YY-MM-DD hh:mm:ss"));
  });
  it("2020-01-01", () => {
    expect(formatDate("2020-01-01")).toBe(
      moment("2020-01-01").format("YY-MM-DD hh:mm:ss")
    );
  });
  it("2020-01", () => {
    expect(formatDate("2020-01")).toBe(
      moment("2020-01").format("YY-MM-DD hh:mm:ss")
    );
  });
  it("1234567890987654321", () => {
    expect(formatDate("1234567890987654321")).toBe(
      "this argumanet is invalid!"
    );
  });
  it("abc", () => {
    expect(formatDate("abc")).toBe("this argumanet is invalid!");
  });
});
