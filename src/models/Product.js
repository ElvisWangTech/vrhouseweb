export default class Product {
  constructor(name, brand, img, price, desc) {
    this.name = name;
    this.brand = brand;
    this.img = img;
    this.price = " ";
    if (price) {
      this.price = price;
    }
    this.desc = " ";
    if (desc) {
      this.desc = desc;
    }
  }
};
