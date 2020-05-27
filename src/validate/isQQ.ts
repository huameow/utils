const isQQ = (value: number | string): boolean => {
  return /^[1-9][0-9]{4,9}$/gim.test(String(value));
};
export default isQQ;
