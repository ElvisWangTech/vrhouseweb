// 房子
export default class HouseModel {
  constructor() {
    this.Floors = []; // 类型是Floor
    this.HotSpots = []; // 类型是HotSpot
    this.ID = ""; // 房源ID，ViewData.txt中不会提供，目前是从url中获取
    this.Name = ""; // 房子名字
    this.CameraHeight = 0; // 拍摄时camera的高度
    this.HouseSize = undefined; // 房子尺寸，Vector3，x:长,y:高,z:宽
    this.CoverImagePath = ""; // 加载封面图片路径
    this.DefaultHotSpotId = ""; // 加载时默认显示的HotSpot
    this.ExistEntrance = false; // 是否存在入口
    this.EntrancePosition = undefined; // 入口的位置，Vector3
    this.EntranceDirection = 0; // 入口的朝向，float
    this.ClientVersion = ""; // 制作端版本号
    this.CaptureVersion = ""; // 拍摄端版本号
    this.IsOutdoor = false; // 是否是户外建筑
    this.MetrePerUnitScale = 1; // 单位长度比例，针对大尺寸建筑结构
  }
};
