const toCamelCase = (str: string): string => {
  return str.replace(/\_[a-z]/g, (item) => item[1].toUpperCase());
};
