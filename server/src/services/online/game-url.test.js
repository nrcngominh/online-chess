const { createGameUrl } = require("./game-url");
const assert = require("assert");

describe("Create URL for games", () => {
  it("should return valid URL", () => {
    const pattern = /^[a-zA-z0-9]{8}$/;
    const url = createGameUrl();
    assert.ok(pattern.test(url));
  });

  it("should return unique URL for each call", () => {
    const url1 = createGameUrl();
    const url2 = createGameUrl();
    assert.notStrictEqual(url1, url2);
  });
});
