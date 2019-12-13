import Base from "./Base";

export default class Button extends Base {
  constructor() {
    super();
    this.ID = undefined;
    this.ImageClass = undefined;
    this.Name = undefined;
    this.Onclick = () => {};
    this.Style = undefined;
    this.Enabled = true;
    this.Active = true;
  }
};
