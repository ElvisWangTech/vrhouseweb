export default class Base {
  toJSON() {
    let modelInstance = this;
    let type = '';
    let value = null;
    let result = {};
    for (let propName in modelInstance) {
      value = modelInstance[propName];
      type = typeof value;
      if (type === 'function') continue;
      if (type !== 'object') {
        result[propName] = value;
      } else {
        var newObj = value instanceof Array ? [] : {};
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? this.toJSON(obj[key]) : obj[key];
          }
        }
        result[propName] = newObj;
      }

    }
    return result;
  }
  static fromJSON(jsonObj) {
    let modelInstance = new(this)();
    let modelPropMap = {};
    let propUpperCase = "";
    for (let propName in modelInstance) {
      let key = propName.toUpperCase();
      modelPropMap[key] = propName;
    }
    for (let propName in jsonObj) {
      propUpperCase = propName.toUpperCase();
      if (modelPropMap.hasOwnProperty(propUpperCase)) {
        modelInstance[modelPropMap[propUpperCase]] = jsonObj[propName];
      }
    }
    return modelInstance;
  }
  toJSONString() {
    return JSON.stringify(this.toJSON());
  }
}
