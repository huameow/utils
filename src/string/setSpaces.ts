import * as R from "ramda";

const setSpaces = (num: number) => {
  return R.repeat(`\u00A0`, num).join(``);
};
