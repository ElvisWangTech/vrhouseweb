import Base from "./Base";

export default class Thumbnail extends Base {
  constructor() {
    super();
    this.ID = undefined;
    this.ImagePath = undefined;
    this.Name = undefined;
    this.Onclick = () => {};
  }
};
