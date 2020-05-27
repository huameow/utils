const toSnakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, (item) => `_${item[0].toLowerCase()}`);
};
export default toSnakeCase;
