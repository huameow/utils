import getDuration from "./getDuration";

describe("getTimeLength", () => {
  it("1590047486000 ~ 1590402025404", () => {
    expect(getDuration(1590047486000, 1590402025404)).toBe("98:28:59");
  });

  it("159004748600009898986756555 ~ now", () => {
    expect(getDuration(159004748600009898986756555)).toBe("");
  });
});
