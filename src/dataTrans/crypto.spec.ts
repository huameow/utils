import crypto from "./crypto";

describe("crypto", () => {
  it("{test: 123}", () => {
    expect(crypto({ test: 123 })).toBe("09341AD31EEB8A27778D67B1DDDE220D");
  });
});
