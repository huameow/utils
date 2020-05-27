const unescape = (text: string): string => {
  const _unescape = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#x27;": "'",
  };

  const unescapeExpr = /(&amp;|&lt;|&gt;|&quot;|&#x27;)/g;
  return `${text}`.replace(unescapeExpr, (match) => _unescape[match]);
};
export default unescape;
