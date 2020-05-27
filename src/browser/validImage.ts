const validImage = (
  url: string,
  successFn: Function,
  failFn: Function
): void => {
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
