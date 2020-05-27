const isPostalCode = (value: number | string): boolean => {
  return /^\d{6}$/.test(String(value));
};
export default isPostalCode;
