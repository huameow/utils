// gbk: 2, utf-8: 3
const getStrLength = (str: string, charset = "gbk"): number => {
  const chineseStep = charset === "gbk" ? 2 : 3;
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
      len++;
    } else {
      len += chineseStep;
    }
  }
  return len;
};
export default getStrLength;
