// 房间
export default class Room {
  constructor() {
    this.ID = ""; // 房间ID，全局唯一
    this.Name = ""; // 房间名
    this.Position = undefined; // 房间位置，Vector3，用于3d房型图的展示
    this.Rotation = 0; // 房间旋转，float，用于3d房型图的展示
    this.RoomFaces = []; // 类型是RoomFace，用于3d房型图的展示，贴图部分
    this.HotSpotIds = []; // 房间所拥有的HotSpots，HotSpot的ID，一个房间可能有多个HotSpots（全景图）
    this.Walls = []; // 墙
    this.Doors = []; // 门
    this.Windows = []; // 窗户
    this.Area = 0; // 面积
    this.MeasurementHeight = 0; // 房间用户实测高度，mm
  }
};
