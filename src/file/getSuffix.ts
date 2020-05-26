const getSuffix = (fileName: string): string => {
  const pos = fileName.lastIndexOf(".");
  let suffix = "";
  if (pos !== -1) {
    suffix = fileName.substring(pos);
  }
  return suffix;
};

export default getSuffix;
