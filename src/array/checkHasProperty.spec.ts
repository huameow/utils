import checkHasProperty from "./checkHasProperty";

const list1 = [
  {
    a: 1,
    b: 1,
  },
  {
    a: 2,
    b: 2,
  },
];

const list2 = [
  {
    a: {
      b: {
        c: 1,
      },
    },
  },
  {
    a: {
      b: {
        c: 2,
      },
    },
  },
];

describe("checkHasProperty", () => {
  it("does [{a: 1, b: 1}, {a: 2, b: 2}] has a: 1", () => {
    expect(checkHasProperty(1, "a", list1)).toBe(true);
  });
  it("does [{a: 1, b: 1}, {a: 2, b: 2}] has a: 3", () => {
    expect(checkHasProperty(3, "a", list1)).toBe(false);
  });

  it("does [{a: {b: {c : 1}}}, {a: {b: {c : 2}}}] has c: 1", () => {
    expect(checkHasProperty(1, ["a", "b", "c"], list2)).toBe(true);
  });
  it("does [{a: {b: {c : 1}}}, {a: {b: {c : 2}}}] has c: 3", () => {
    expect(checkHasProperty(3, ["a", "b", "c"], list2)).toBe(false);
  });
});
