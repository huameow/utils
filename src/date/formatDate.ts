import moment from "moment";
import * as R from "ramda";

const formatDate = (
  value?: string | number | Date,
  formatStr = "YY-MM-DD hh:mm:ss"
): string => {
  if (value && String(new Date(value)) !== "Invalid Date") {
    return moment(value).format(formatStr);
  } else if (R.isNil(value) || R.isEmpty(value)) {
    return moment(new Date()).format(formatStr);
  } else if (
    !Number(value) ||
    String(value).length < 13 ||
    String(new Date(value)) === "Invalid Date"
  ) {
    return "this argumanet is invalid!";
  }
};

export default formatDate;
