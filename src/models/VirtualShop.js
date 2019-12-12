export default class VirtualShop {
  constructor() {
    this.ID = ""; // 虚拟商铺ID，全局唯一
    this.Name = ""; // 虚拟商铺名称
    this.Products = []; // 商品列表
    this.Anchor = undefined; // 类型是Anchor，用于描述在全景图中的位置
  }
};
