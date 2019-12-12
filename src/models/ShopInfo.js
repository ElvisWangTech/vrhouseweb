export default class ShopInfo {
  constructor(id, name, category) {
    this.id = id;
    this.name = name;
    this.category = category || "服装 clothing";
  }
};
