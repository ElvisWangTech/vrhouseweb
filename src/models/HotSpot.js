// 热点（全景图）
export default class HotSpot {
  constructor() {
    this.ID = ""; // 热点ID，全局唯一
    this.Name = ""; // 热点名字，光柱，光点，缩略图上显示的名称
    this.TileImagesPath = []; // 6张全景切图路径，按照l,r,u,d,f,b的顺序
    this.BlurTileImagesPath = []; // 6张模糊全景切图路径，按照l,r,u,d,f,b的顺序
    this.ThumbnailPath = ""; // 缩略图路径，用于thumbnail的展示
    this.Position = undefined; // 热点位置，Vector3
    this.Rotation = undefined; // 热点旋转，Vector3
    this.BestCameraView = undefined; // 相机的最佳视角，Vector2
    this.VisibleHotSpotIds = []; // 可见的热点ID
    this.Anchors = []; // 类型是Anchor，用于显示锚点信息
    this.VirtualShops = []; // 类型是VirtualShop，用于虚拟商铺的展示
    this.MeasurementWalls = []; // 更加精细的墙体尺寸数据
  }
};
