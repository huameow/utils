const loadScript = (src: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    const scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.onerror = reject;
    scriptNode.onload = resolve;
    document.body.appendChild(scriptNode);
    scriptNode.src = src;
  });
};
export default loadScript;
