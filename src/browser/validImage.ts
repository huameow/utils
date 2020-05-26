const validImage = (url, successFn, failFn) => {
  const img = new Image();
  img.onload = () => {
    successFn();
  };
  img.onerror = () => {
    failFn();
  };
  img.src = url;
};
export default validImage;
