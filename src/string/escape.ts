const escape = (text: string | number): string => {
  const _escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
  };

  const escapeExpr = /(&|<|>|"|')/g;
  return `${text}`.replace(escapeExpr, (match) => _escape[match]);
};
export default escape;
