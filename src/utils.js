/**
 *Project name: VRHouseWeb
 *File name: Util
 *Created by Shirlman on 2017/8/31
 *Copyright 2016年 - 2018年 上海亦我信息技术有限公司. All rights reserved.
 *注意：本内容仅限于上海亦我信息技术有限公司内部以及相关签约客户研发团队内部传阅，禁止外泄以及用于其他的商业目的
 */

const Util = function () {};

Util.checkIsPhone = function () {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

  return bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM;
};

Util.isIPhoneX = function () {
  return navigator.userAgent.toLowerCase().match(/iphone/i) == "iphone" &&
    screen.width == 375 && screen.height == 812 && window.devicePixelRatio == 3;
};

Util.getUrlParameter = function (name) {
  if (name) {
    var pattern = "(^|&)" + name + "=([^&]*)(&|$)";
    var flags = "i"; // 大小写不记
    var reg = new RegExp(pattern, flags); //构造一个含有目标参数的正则表达式对象
    var result = window.location.search.substr(1).match(reg); //匹配目标参数
    if (result) return decodeURIComponent(result[2]);
    return null; //返回参数值
  }
};

Util.setFullScreen = function (state) {
  if (state) {
    document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
    document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen();
    document.documentElement.mozRequestFullScreen && document.documentElement.mozRequestFullScreen();
    document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } else {
    document.exitFullscreen && document.exitFullscreen();
    document.msExitFullscreen && document.msExitFullscreen();
    document.mozCancelFullScreen && document.mozCancelFullScreen();
    document.webkitExitFullscreen && document.webkitExitFullscreen();
  }
};
Util.getScreenOrientation = function () {
  switch (window.screen.orientation || window.screen.mozOrientation) {
    case 'landscape-primary':
      return 90;
    case 'landscape-secondary':
      return -90;
    case 'portrait-secondary':
      return 180;
    case 'portrait-primary':
      return 0;
  }
  if (window.orientation !== undefined)
    return window.orientation;
}
Util.isLandscape = function () {
  var isLand;
  var orientation = Util.getScreenOrientation();
  if (orientation % 180 === 0) {
    isLand = false;
  } else if (orientation === 90 || orientation === -90) {
    isLand = true;
  }

  return isLand;
};

Util.addStats = function (container) {
  var stats = new Stats();
  container.appendChild(stats.dom);

  function update() {
    stats.update();
    requestAnimationFrame(update);
  }

  update();
};

Util.setCursorOnHover = function (domElement, state) {
  domElement.style.cursor = state ? "url(" + Resources.path.hand + "), pointer" : "default";
};

Util.rgbaColorToString = function (color) {
  return "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
};

Util.rgbColorToString = function (color) {
  return "rgb(" + color.r + "," + color.g + "," + color.b + ")";
};

Util.contains = function (array, item) {
  var contain = false;

  for (var i in array) {
    if (array[i] === item) {
      contain = true;
    }
  }

  return contain;
};

Util.copyArray = function (array) {
  var newArray = [];

  array.forEach(function (item) {
    newArray.push(item);
  });

  return newArray;
};

Util.remove = function (array, val) {
  var index = array.indexOf(val);
  if (index > -1) {
    array.splice(index, 1);
  }
};

Util.saveAndDownload = function (content, filename) {
  var blob = new Blob([content], {
    type: 'text/plain'
  });

  window.URL = window.URL || window.webkitURL;
  window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;

  var link = document.createElement('a');
  link.style.display = 'none';
  document.body.appendChild(link); // Firefox workaround, see #6594

  link.href = URL.createObjectURL(blob);
  link.download = filename || 'data.json';
  link.click();
};

Util.getFileName = function (url) {
  if (!url) return;

  if (url.indexOf(".") === -1) {
    return;
  }

  var splits = url.split(".");

  return splits[splits.length - 1];
};

Util.isWebGLSupport = function () {
  try {
    var canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

Util.UUID8Bit = function () {
  var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A",
    "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  var uuid = "";
  for (var i = 0; i < 8; ++i) {
    var index = Math.min(Math.floor(Math.random() * 62), 61);
    uuid += chars[index];
  }
  return uuid;
};

// 时间格式化函数:年-月-日 时-分-秒
Util.formatDateYMDHMS = function (date) {
  if (date && typeof date === "object" && typeof date.getFullYear === "function") {
    var s = date.getFullYear() + "-";
    s += ("0" + (date.getMonth() + 1)).slice(-2) + "-";
    s += ("0" + date.getDate()).slice(-2);
    s += " " + ("0" + date.getHours()).slice(-2) + ":";
    s += ("0" + date.getMinutes()).slice(-2) + ":";
    s += ("0" + date.getSeconds()).slice(-2);
    return s;
  } else {
    return "";
  }
};

Util.formatUnitString = function (lenInMetre, imperialUnits) {
  if (imperialUnits) {
    var inch = Math.round(12 * lenInMetre / .3048);
    var feet = Math.floor(inch / 12);
    inch -= 12 * feet;
    return feet + "′" + (inch > 0 ? inch + "˝" : "");
  } else {
    return lenInMetre.toFixed(1) + "m";
  }
};

Util.formatAreaString = function (SQM, imperialUnits) {
  if (imperialUnits) {
    return Math.round(SQM / .3048 / .3048) + "sf";
  } else {
    return SQM.toFixed(1) + "㎡";
  }
};

String.prototype.endWith = function (endStr) {
  var d = this.length - endStr.length;
  return (d >= 0 && this.lastIndexOf(endStr) === d)
};

String.prototype.format = function () {
  if (arguments.length === 0) return this;
  var param = arguments[0];
  var s = this;
  if (typeof (param) === 'object') {
    for (var key in param)
      s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
    return s;
  } else {
    for (var i = 0; i < arguments.length; i++)
      s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
    return s;
  }
};

Util.cloneDeep = function (data) {
  var dataCloned;
  if (typeof _ === 'function' && _.cloneDeep) {
    dataCloned = _.cloneDeep(data);
  } else {
    dataCloned = _cloneDeep(data);
  }

  function _cloneDeep(obj) {
    if (typeof obj !== 'object')
      return obj;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = typeof obj[key] === 'object' ? _cloneDeep(obj[key]) : obj[key];
      }
    }
    return newObj;
  }

  return dataCloned;
};

export default Util;
