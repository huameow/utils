import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import isDate from "./isDate";
import toDate from "./toDate";

const getDuration = (
  start: number | string | Date,
  end: number | string | Date = new Date(),
  formatStr = "hh:mm:ss"
): string => {
  if (!isDate(start)) {
    return "";
  }
  const endTime: number = toDate(end);
  const startTime: number = toDate(start);
  let diff: number = endTime - startTime;
  diff = diff < 0 ? 0 : diff;
  momentDurationFormatSetup(moment);
  const data = moment.duration(diff);
  return data.format(formatStr, { trim: false });
};
export default getDuration;
