const copy = (text, id): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(text).then(
        function () {
          resolve("复制成功！");
        },
        function (err) {
          reject("复制失败！");
          console.error("Async: Could not copy text: ", err);
        }
      );
    } else if (document.execCommand) {
      window.getSelection().removeAllRanges();
      try {
        const input = document.getElementById(id);
        const range = document.createRange();
        range.selectNode(input);
        window.getSelection().addRange(range);
        const res = document.execCommand("copy");
        if (res) {
          resolve("复制成功！");
        } else {
          reject("复制失败！");
        }
        window.getSelection().removeAllRanges();
      } catch (error) {
        reject("复制失败！");
      }
    }
  });
};
export default copy;
