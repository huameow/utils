import html2canvas from "html2canvas";
import b64toBlob from "../dataTrans/b64toBlob";
import createObjectURL from "../dataTrans/createObjectURL";

function roundedImage(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export function drawImage({ url, width, height }, id, hasRadius = false) {
  const downloadedImg = new Image();
  downloadedImg.crossOrigin = "Anonymous";
  function imageReceived() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = "rgba(255, 255, 255, 0.5)";
    context.save();
    if (hasRadius) {
      roundedImage(context, 0, 0, width, height, width / 2);
      context.clip();
    }
    context.drawImage(
      downloadedImg,
      0,
      0,
      downloadedImg.width,
      downloadedImg.height,
      0,
      0,
      width,
      height
    );
    document.querySelector(id).appendChild(canvas);
  }
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = url;
}

function download(canvas, fileName = "shareImage") {
  const base64 = canvas
    .toDataURL("image/png")
    .replace("data:image/png;base64,", "");
  const blob = b64toBlob(base64, "image/png");
  const anchor = window.document.createElement("a");
  anchor.href = createObjectURL(blob);
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.URL.revokeObjectURL(anchor.href);
}

const downloadedImg = (id): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    const source = document.querySelector(id);
    if (!source) {
      reject("下载失败!");
    }
    const rect = source.getBoundingClientRect();
    html2canvas(source, { useCORS: true, x: rect.x, y: rect.y }).then(
      (canvas) => {
        download(canvas);
      }
    );
  });
};

export default downloadedImg;
