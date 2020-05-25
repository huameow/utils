import isNumber from "./isNumber";
import rounding from "./rounding";
import nonRounding from "./nonRounding";

function floatFix(
  value: string | number,
  decimal: number = 2,
  isRounding: boolean = true
): string {
  const reduceNumber = (num: number) => {
    if (isRounding) {
      return rounding(num, decimal);
    } else {
      return nonRounding(num, decimal);
    }
  };

  const reduceValue = (v: any) => {
    return isNumber(v) ? reduceNumber(v) : v;
  };
  return String(reduceValue(value));
}

export default floatFix;
