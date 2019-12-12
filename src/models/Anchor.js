export default class Anchor {
  constructor() {
    this.ID = ""; // 锚点ID，全局唯一
    this.Name = ""; // 显示名称
    this.SpaceID = ""; // 用来表示此商品出现在哪个使用空间（房间类型的一个枚举值），仅装修才会用到
    this.ResourceType = ""; // 资源类型。无、图片(image)、视频(video)、内嵌网页(iframe)、超链接(href)。。。
    this.Url = ""; // 资源Url，配合RerourceType字段一起使用
    this.Desc = ""; // 描述文字
    this.Position = undefined; // Vector2，仅含极坐标经纬度，用于描述在全景图中的位置
  }
};
