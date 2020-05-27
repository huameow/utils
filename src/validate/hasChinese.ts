const hasChinese = (value: string): boolean => {
  return /[\u4e00-\u9fa5]/gm.test(value);
};
export default hasChinese;
