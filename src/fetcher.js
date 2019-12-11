import axios from 'axios'
import Util from './utils'

const Fetcher = {
  domain: Util.getUrlParameter("domain"),
  configServer: "//webresource.123kanfang.com/",
  authServer: "//webapi.123kanfang.com/",
  noCache: Util.getUrlParameter("noCache") === "true",
  houseId: Util.getUrlParameter("hid") || "",
  isSingleMode: Util.getUrlParameter("mode") === "single",
  isEditorMode: Util.getUrlParameter("mode") === "editor",
  isEditor3_1: false,
  showAllLines: Util.getUrlParameter("showAllLines") === "true",
  enableMeasurement: Util.getUrlParameter("enableMeasurement") === "true",
  showDefaultBottom: Util.getUrlParameter("showDefaultBottom") === "true",
  logoOpacity: Util.getUrlParameter("logoOpacity") || 1,
  showMultipleFloorPlans: Util.getUrlParameter("showMultipleFloorPlans") === "true",
  imperialUnits: Util.getUrlParameter("imperialUnits") || false,
};

Fetcher.getHousePathPrefix = function () {
  return this.domain + this.houseId + "/";
};

Fetcher.getProcessDataUrl = function () {
  return this.getHousePathPrefix() + "ProcessData.txt?" + Util.UUID8Bit();
};

Fetcher.getSingleViewDataUrl = function () {
  return this.getHousePathPrefix() + "SingleViewData.txt" + (this.noCache ? ("?" + Util.UUID8Bit()) : "");
};

Fetcher.getViewDataUrl = function () {
  return this.getHousePathPrefix() + "ViewData.txt" + (this.noCache ? ("?" + Util.UUID8Bit()) : "");
};

/**
 * 获取viewdata.txt 或者singleViewData.txt
 */
Fetcher.getViewData = function (onGotData) {
  let url = this.isSingleMode ? this.getSingleViewDataUrl() : this.getViewDataUrl();
  let urlParams = {};
  axios.get(url, urlParams)
    .then(resp => {
      onGotData && onGotData(resp);
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * url: 自定义url
 * params: 自定义参数
 */
Fetcher.getViewDataByConfig = function (config) {
  return axios.request(config);
};

Fetcher.authServer = axios.create({
  baseURL: Fetcher.authServer
});

Fetcher.configServer = axios.create({
  baseURL: Fetcher.configServer
});


export default Fetcher;
