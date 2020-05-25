import moment from "moment";
import * as R from "ramda";
import * as AllApis from "./main";

describe("API surface", () => {
  it("both APIs are in sync", function () {
    const mached = R.filter(R.is(Function))(AllApis);
    const apis = Object(AllApis);
    expect(mached.length).toEqual(apis.length);
  });
});
