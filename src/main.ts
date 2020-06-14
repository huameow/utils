import isDate from "./date/isDate";
import toDate from "./date/toDate";
import formatDate from "./date/formatDate";
import getDuration from "./date/getDuration";

import copy from "./browser/copy";
import { downloadedImage, drawImage } from "./browser/downloadImage";
import hasFlash from "./browser/hasFlash";
import isRetina from "./browser/isRetina";
import loadScript from "./browser/loadScript";
import ua from "./browser/ua";
import validImage from "./browser/validImage";

import b64toBlob from "./dataTrans/b64toBlob";
import createObjectURL from "./dataTrans/createObjectURL";
import crypto from "./dataTrans/crypto";

import getSuffix from "./file/getSuffix";

import floatFix from "./number/floatFix";
import formatLargeNumber from "./number/formatLargeNumber";
import isNumber from "./number/isNumber";
import nonRounding from "./number/nonRounding";
import priceFormat from "./number/priceFormat";
import rounding from "./number/rounding";
import switchCentAndYuanProps from "./number/switchCentAndYuan";
import toPrice from "./number/toPrice";

import decodeHTMLEntities from "./string/decodeHTMLEntities";
import escape from "./string/escape";
import getStrLength from "./string/getStrLength";
import randomString from "./string/randomString";
import setSpaces from "./string/setSpaces";
import toCamelCase from "./string/toCamelCase";
import toSnakeCase from "./string/toSnakeCase";
import unescape from "./string/unescape";

import hasChinese from "./validate/hasChinese";
import isChinaMobile from "./validate/isChinaMobile";
import isEmail from "./validate/isEmail";
import isID from "./validate/isID";
import isMobile from "./validate/isMobile";
import isPhone from "./validate/isPhone";
import isPostalCode from "./validate/isPostalCode";
import isQQ from "./validate/isQQ";
import isURL from "./validate/isURL";

import checkHasProperty from "./array/checkHasProperty";
import * as sort from './sort';

export {
  formatDate,
  isDate,
  toDate,
  getDuration,
  copy,
  downloadedImage,
  drawImage,
  hasFlash,
  isRetina,
  loadScript,
  ua,
  validImage,
  b64toBlob,
  createObjectURL,
  crypto,
  getSuffix,
  floatFix,
  formatLargeNumber,
  isNumber,
  nonRounding,
  priceFormat,
  rounding,
  switchCentAndYuanProps,
  toPrice,
  decodeHTMLEntities,
  escape,
  unescape,
  getStrLength,
  randomString,
  setSpaces,
  toCamelCase,
  toSnakeCase,
  hasChinese,
  isChinaMobile,
  isEmail,
  isID,
  isMobile,
  isPhone,
  isPostalCode,
  isQQ,
  isURL,
  checkHasProperty,
  sort
};
