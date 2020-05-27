const hasChinese = (value: unknown): boolean => {
  return /[\u4e00-\u9fa5]/gm.test(String(value));
};
export default hasChinese;
