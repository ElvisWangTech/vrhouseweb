// 3d房型图贴图
export default class RoomFace {
  constructor() {
    this.Name = ""; // 贴图的名字，目前没有多大用处
    this.Position = undefined; // 贴图位置，Vector3，用于3d房型图的展示
    this.Rotation = undefined; // 贴图旋转，Vector3，用于3d房型图的展示
    this.Width = 0; // 贴图的宽，用于3d房型图的展示
    this.Height = 0; // 贴图的高，用于3d房型图的展示
    this.ImagePath = ""; // 贴图图片路径
  }
};
