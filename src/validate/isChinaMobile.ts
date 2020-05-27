const isChinaMobile = (value): boolean => {
  return /^((\+86)|(86)|(086))?(13[0-9]|15[0-9]|166|17[0-9]|18[0-9]|14[0-9]|19[0-9])[0-9]{8}$/.test(
    value
  );
};
export default isChinaMobile;
