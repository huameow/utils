const createObjectURL = (blob: Blob) => {
  return window.URL
    ? window.URL.createObjectURL(blob)
    : window.webkitURL.createObjectURL(blob);
};
