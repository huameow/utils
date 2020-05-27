import * as R from "ramda";

const setSpaces = (num: number): string => {
  return R.repeat(`\u00A0`, num).join(``);
};
export default setSpaces;
