const formatLargeNumber = (value: number | string): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export default formatLargeNumber;
