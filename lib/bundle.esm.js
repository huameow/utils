import { is, isNil, isEmpty, repeat } from "ramda";
import * as moment from "moment";
import moment__default, { duration } from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import html2canvas from "html2canvas";
import Utf8 from "crypto-js/enc-utf8";
import Base64 from "crypto-js/enc-base64";
import Md5 from "crypto-js/md5";

const isDate = (value) => {
  let date = value;
  if (is(String, value) && String(value).length >= 13) {
    date = Number(value);
  }
  return new Date(date) && String(new Date(date)) !== "Invalid Date";
};

const toDate = (value) => {
  return isDate(value) ? new Date(value).getTime() : 0;
};

const formatDate = (value, formatStr = "YY-MM-DD hh:mm:ss") => {
  if (value && String(new Date(value)) !== "Invalid Date") {
    return moment__default(value).format(formatStr);
  } else if (isNil(value) || isEmpty(value)) {
    return moment__default(new Date()).format(formatStr);
  } else if (
    !Number(value) ||
    String(value).length < 13 ||
    String(new Date(value)) === "Invalid Date"
  ) {
    return "this argumanet is invalid!";
  }
};

const getDuration = (start, end = new Date(), formatStr = "hh:mm:ss") => {
  if (!isDate(start)) {
    return "";
  }
  const endTime = toDate(end);
  const startTime = toDate(start);
  let diff = endTime - startTime;
  diff = diff < 0 ? 0 : diff;
  momentDurationFormatSetup(moment);
  const data = duration(diff);
  return data.format(formatStr, { trim: false });
};

const copy = (text, id) => {
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

const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

const createObjectURL = (blob) => {
  return window.URL ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);
};

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
function drawImage({ url, width, height }, id, hasRadius = false) {
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
  const base64 = canvas.toDataURL("image/png").replace("data:image/png;base64,", "");
  const blob = b64toBlob(base64, "image/png");
  const anchor = window.document.createElement("a");
  anchor.href = createObjectURL(blob);
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.URL.revokeObjectURL(anchor.href);
}
const downloadedImage = (id) => {
  return new Promise((resolve, reject) => {
    const source = document.querySelector(id);
    if (!source) {
      reject("下载失败!");
    }
    const rect = source.getBoundingClientRect();
    html2canvas(source, { useCORS: true, x: rect.x, y: rect.y }).then((canvas) => {
      download(canvas);
    });
  });
};

const hasFlash = () => {
  let hasFlashPlayer = false;
  let xFlash;
  let plugins = navigator.plugins;
  let shockwave = navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"];
  xFlash = function () {
    let result = false;
    let versions = [
      "ShockwaveFlash.ShockwaveFlash.6",
      "ShockwaveFlash.ShockwaveFlash.7",
      "ShockwaveFlash.ShockwaveFlash",
    ];
    for (let i = 0; i < versions.length; i++) {
      if (!result)
        try {
          result = new ActiveXObject(versions[i]);
        } catch (e) {
          console.log(e);
        }
    }
    return !!result;
  };
  hasFlashPlayer =
    (plugins && plugins.length && shockwave && shockwave.enabledPlugin) ||
    (typeof ActiveXObject !== "undefined" && xFlash()) ||
    false;
  return !!hasFlashPlayer;
};

const isRetina = () => {
  return window.devicePixelRatio > 1;
};

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.onerror = reject;
    scriptNode.onload = resolve;
    document.body.appendChild(scriptNode);
    scriptNode.src = src;
  });
};

let platform = "";
if (typeof window !== "undefined") {
  platform = navigator.userAgent.toLowerCase();
}
const ua = {
  isIOS() {
    return /iPhone|iPad|iPod/gi.test(platform) && !window.MSStream;
  },
  getIOSVersion() {
    return (
      parseFloat(
        `${
          (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [
            0,
            "",
          ])[1]
        }`
          .replace("undefined", "3_2")
          .replace("_", ".")
          .replace("_", "")
      ) || false
    );
  },
  isAndroid() {
    return /android/gi.test(platform);
  },
  isAndroidOld() {
    return /android 2.3/gi.test(platform) || /android 2.2/gi.test(platform);
  },
  getAndroidVersion() {
    const match = platform.match(/android\s([0-9\.]*)/);
    return match ? match[1] : false;
  },
  isWeixin() {
    return /micromessenger/gi.test(platform);
  },
  isQQ() {
    return /qq/gi.test(platform);
  },
  isIPad() {
    return /ipad/gi.test(platform);
  },
  isMobile() {
    return (
      /(android|bb\d+|meego).+mobile|kdtunion|weibo|m2oapp|micromessenger|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        platform
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        platform.substr(0, 4)
      )
    );
  },
  isSafari() {
    return /safari/gi.test(platform) && !/chrome/gi.test(platform);
  },
  getSafariVersion() {
    const pattern = /safari\/(\S*)/i;
    if (pattern.test(platform)) {
      return platform.match(pattern)[1];
    }
    return "0";
  },
  isChrome() {
    return /chrome/gi.test(platform);
  },
  getChromeVersion() {
    const pattern = /chrome\/(\S*)/i;
    if (pattern.test(platform)) {
      return platform.match(pattern)[1];
    }
    return "0";
  },
  isUC() {
    return /ucbrowser/gi.test(platform);
  },
  getUCVersion() {
    const pattern = /ucbrowser\/(\S*)/i;
    if (pattern.test(platform)) {
      return platform.match(pattern)[1];
    }
    return "0";
  },
  isWeappWebview() {
    const env = typeof __wxjs_environment !== "undefined" ? __wxjs_environment : "";
    return /miniprogram/i.test(platform) || env === "miniprogram";
  },
  isMiniProgramWebview() {
    const env = typeof __wxjs_environment !== "undefined" ? __wxjs_environment : "";
    return (
      /miniprogram/i.test(platform) ||
      env === "miniprogram" ||
      /(swan-baiduboxapp|baiduboxapp-swan)/.test(platform)
    );
  },
};

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

const crypto = (data, needJoin = false) => {
  let newData = JSON.parse(JSON.stringify(data));
  if (needJoin) {
    const keys = Object.keys(newData).sort();
    newData = keys.map((it) => `${it}=${data[it]}`).join("&");
  }
  const wordArray = Utf8.parse(newData);
  const base64 = Base64.stringify(wordArray);
  const str = Md5(base64).toString();
  return str.toUpperCase();
};

const getSuffix = (fileName) => {
  const pos = fileName.lastIndexOf(".");
  let suffix = "";
  if (pos !== -1) {
    suffix = fileName.substring(pos);
  }
  return suffix;
};

const isNumber = (value) => {
  const v = value;
  return !isNaN(v);
};

function rounding(value, decimal) {
  return parseFloat(String(value)).toFixed(decimal);
}

const nonRounding = (value, decimal) => {
  const step = Math.pow(10, decimal);
  return Math.floor(value * step) / step;
};

function floatFix(value, decimal = 2, isRounding = true) {
  const reduceNumber = (num) => {
    if (isRounding) {
      return rounding(num, decimal);
    } else {
      return nonRounding(num, decimal);
    }
  };
  const reduceValue = (v) => {
    return isNumber(v) ? reduceNumber(v) : v;
  };
  return String(reduceValue(value));
}

const formatLargeNumber = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function toPrice(value) {
  if (!isNumber(value)) {
    return !isNaN(Number(value)) ? Number(value) : 0;
  }
  return Number(floatFix(value));
}

var Languages;
(function (Languages) {
  Languages["ZH"] = "zh";
  Languages["EN"] = "en";
})(Languages || (Languages = {}));
function priceFormat(value, local = Languages.ZH) {
  const number = toPrice(value);
  let currencyDisplay = "¥";
  if (local === Languages.EN) {
    currencyDisplay = "$";
  }
  return `${currencyDisplay}${number}`;
}

var PriceStage;
(function (PriceStage) {
  PriceStage["CENT"] = "cent";
  PriceStage["YUAN"] = "yuan";
})(PriceStage || (PriceStage = {}));
function switchCentAndYuanProps(value, stage = PriceStage.YUAN) {
  if (stage === PriceStage.CENT) {
    return toPrice(value) / 100;
  } else {
    return toPrice(value) * 100;
  }
}

const decodeHTMLEntities = (str) => {
  const element = document.createElement("div");
  if (str && typeof str === "string") {
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
    element.innerHTML = str;
    str = element.textContent;
    element.textContent = "";
  }
  return str;
};

const escape = (text) => {
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

const getStrLength = (str, charset = "gbk") => {
  const chineseStep = charset === "gbk" ? 2 : 3;
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
      len++;
    } else {
      len += chineseStep;
    }
  }
  return len;
};

const randomString = (length) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  length = length || 10;
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const setSpaces = (num) => {
  return repeat(`\u00A0`, num).join(``);
};

const toCamelCase = (str) => {
  return str.replace(/\_[a-z]/g, (item) => item[1].toUpperCase());
};

const toSnakeCase = (str) => {
  return str.replace(/[A-Z]/g, (item) => `_${item[0].toLowerCase()}`);
};

const unescape = (text) => {
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

const hasChinese = (value) => {
  return /[\u4e00-\u9fa5]/gm.test(value);
};

const isChinaMobile = (value) => {
  return /^((\+86)|(86)|(086))?(13[0-9]|15[0-9]|166|17[0-9]|18[0-9]|14[0-9]|19[0-9])[0-9]{8}$/.test(
    String(value)
  );
};

const isEmail = (value) => {
  const reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
};

const isID = (value) => {
  const reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  return reg.test(value);
};

const isMobile = (value) => {
  return (
    /^((\+86)|(86)|(086))?(1)\d{10}$/.test(String(value)) ||
    /^\+?(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1|)-?\d{1,14}$/.test(
      String(value)
    )
  );
};

const isPhone = (value) => {
  return /^0[0-9\-]{10,13}$/.test(String(value));
};

const isPostalCode = (value) => {
  return /^\d{6}$/.test(String(value));
};

const isQQ = (value) => {
  return /^[1-9][0-9]{4,9}$/gim.test(String(value));
};

const isURL = (value) => {
  return /^((?:(?:https?|ftp):|)\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    String(value)
  );
};

export {
  b64toBlob,
  copy,
  createObjectURL,
  crypto,
  decodeHTMLEntities,
  downloadedImage,
  drawImage,
  escape,
  floatFix,
  formatDate,
  formatLargeNumber,
  getDuration,
  getStrLength,
  getSuffix,
  hasChinese,
  hasFlash,
  isChinaMobile,
  isDate,
  isEmail,
  isID,
  isMobile,
  isNumber,
  isPhone,
  isPostalCode,
  isQQ,
  isRetina,
  isURL,
  loadScript,
  nonRounding,
  priceFormat,
  randomString,
  rounding,
  setSpaces,
  switchCentAndYuanProps,
  toCamelCase,
  toDate,
  toPrice,
  toSnakeCase,
  ua,
  unescape,
  validImage,
};
//# sourceMappingURL=bundle.esm.js.map
