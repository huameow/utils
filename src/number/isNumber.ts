const isNumber = (value: string | number | unknown): boolean => {
  const v: any = value;
  return !isNaN(v);
};

export default isNumber;
