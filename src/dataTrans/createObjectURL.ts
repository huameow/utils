const createObjectURL = (blob: Blob): string => {
  return window.URL
    ? window.URL.createObjectURL(blob)
    : window.webkitURL.createObjectURL(blob);
};
export default createObjectURL;
