import isNumber from "./isNumber";
import floatFix from "./floatFix";

export default function toPrice(value: string | number): number {
  if (!isNumber(value)) {
    return !isNaN(Number(value)) ? Number(value) : 0;
  }

  return Number(floatFix(value));
}
