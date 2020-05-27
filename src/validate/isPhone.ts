const isPhone = (value: number | string): boolean => {
  return /^0[0-9\-]{10,13}$/.test(String(value));
};
export default isPhone;
