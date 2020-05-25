import moment from "moment";
import * as R from "ramda";

const isDate = (value: string | number | Date): boolean => {
  let date = value;
  if (R.is(String, value) && String(value).length >= 13) {
    date = Number(value);
  }
  return new Date(date) && String(new Date(date)) !== "Invalid Date";
};

export default isDate;
