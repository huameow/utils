import Utf8 from "crypto-js/enc-utf8";
import Base64 from "crypto-js/enc-base64";
import Md5 from "crypto-js/md5";

const crypto = (data: unknown, needJoin = false): string => {
  let newData = JSON.parse(JSON.stringify(data));
  if (needJoin) {
    const keys = Object.keys(newData).sort();
    newData = keys.map((it) => `${it}=${data[it]}`).join("&");
  }
  const wordArray = Utf8.parse(newData);
  const base64 = Base64.stringify(wordArray);
  const str = Md5(base64).toString();
  return str.toUpperCase();
};
export default crypto;
