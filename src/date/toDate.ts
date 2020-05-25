import moment from "moment";
import isDate from "./isDate";

const toDate = (value: string | number | Date): number => {
  return isDate(value) ? new Date(value).getTime() : 0;
};

export default toDate;
