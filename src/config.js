export default {
  menuIcons: {
    'icoPlayer': {
      enabled: true,
      active: true
    },
    'icoRuler': {
      enabled: true,
      active: true
    },
    'icoVr': {
      enabled: true
    }
  },
  buttons: {
    'addAnchorButton': {
      id: "addAnchorButton",
      style: {
        top: '10px'
      },
      imageClass: "img-addAnchor",
      enabled: false,
      active: true,
      onclick: function () {
        console.log('addAnchorButton clicked');
      }
    },
    'mosaicButton': {
      id: "mosaicButton",
      style: {
        top: '60px'
      },
      imageClass: "img-mosaic",
      enabled: true,
      active: true
    },
    'screenShot': {
      id: "screenShot",
      style: {
        top: '110px'
      },
      imageClass: "img-screenShot",
      enabled: true,
      active: true
    },
    'uploadButton': {
      id: "uploadButton",
      style: {
        top: '160px'
      },
      imageClass: "img-upload",
      enabled: true,
      active: true
    },
    'recordButton': {
      id: "recordButton",
      style: {
        top: '190px'
      },
      imageClass: "img-record",
      enabled: true,
      active: true
    },
    'replayButton': {
      id: "replayButton",
      style: {
        top: '230px'
      },
      imageClass: "img-replay",
      enabled: true,
      active: true
    },
    'measureWallButton': {
      id: "measureWallButton",
      style: {
        top: '230px'
      },
      imageClass: "img-measureWall",
      enabled: false,
      active: true
    },
    'measureLineButton': {
      id: "measureLineButton",
      style: {
        top: '269px'
      },
      imageClass: "img-measureLine",
      enabled: true,
      active: true
    },
    'measureGridButton': {
      id: "measureGridButton",
      style: {
        top: '308px'
      },
      imageClass: "img-measureGrid",
      enabled: true,
      active: true
    },
    'addCubeButton': {
      id: "addCubeButton",
      style: {
        top: '347px'
      },
      imageClass: "img-addCube",
      enabled: true,
      active: true
    },
    'measureDeleteButton': {
      id: "measureDeleteButton",
      style: {
        top: '386px'
      },
      imageClass: "img-measureDelete",
      enabled: true,
      active: true
    },
  },
  godviewPanel: {
    position: {
      top: 10,
      left: 10
    },
    enabled: true
  }
}
