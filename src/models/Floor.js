// 楼层
export default class Floor {
  constructor() {
    this.ID = ""; // 楼层ID，全局唯一
    this.Name = ""; // 楼层名
    this.FloorSize = undefined; // 楼层尺寸，Vector3，x:长,y:高,z:宽
    this.FloorPlanPath = ""; // 户型图路径
    this.Rooms = []; // 类型是Room
    this.FloorPlanCenterPoint = undefined; // 户型图中心点，Vector2，用户自定义户型图的展示
    this.IsMatchCustomFloorPlan = false; // 是否带有自定义户型图
    this.ModelPath = ""; // 户外建筑路径
    this.ShopInfo = []; // 商铺信息
    this.EnvelopeLines = undefined; // 尺寸信息，EnvelopeLine
    this.FloorPlanMargin = 0; // 为了有空间显示墙厚度
  }
};
