<template>
  <div id="godviewPanel" @click="test()" :style="computedStyle">
    <div id="roomInfo">{{roomInfo}}</div>
    <div id="small-view-container"></div>
    <div id="switch-2d-3d-btn-group">
      <button id="switch3DButton" :class="{modeIn: viewMode==='3D'}" @click="handleSwitch('3D')">{{$t('floorPlan3d')}}</button>
      <button id="switch2DButton" :class="{modeIn: viewMode==='2D'}" @click="handleSwitch('2D')">{{$t('floorPlan2d')}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "godview-panel",
  props: {
    roomInfo: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "3D"
    },
    initStatus: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    computedStyle() {
      return `margin-top: ${this.initStatus.position.top}px; left: ${this.initStatus.position.left}`;
    }
  },
  methods: {
    handleSwitch(mode) {
      this.viewMode = mode;
    },
    test() {
      console.log("test");
    }
  },
  data() {
    return {
      viewMode: this.mode
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@supports (left: constant(safe-area-inset-left)) or
  (left: env(safe-area-inset-left)) {
  #godviewPanel {
    left: calc(10px + constant(safe-area-inset-left));
    left: calc(10px + env(safe-area-inset-left));
  }
}

#godviewPanel {
  position: absolute;
  left: 10px;
  width: 105px;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}

#roomInfo {
  user-select: none;
  width: 100%;
  font-size: 10px;
  height: 12px;
  line-height: 12px;
  text-align: center;
  color: #fff;
  padding: 8px 0px;
}
#small-view-container {
  height: 105px;
}
#switch-2d-3d-btn-group {
  width: 100%;
  height: 27px;
  pointer-events: auto;

  /* 去除inline-block元素间间距 */
  font-size: 0;
  -webkit-text-size-adjust: none;
}
#switch2DButton,
#switch3DButton {
  cursor: url(~@/assets/textures/hand.png), pointer;
  width: 50%;
  height: 100%;
  text-align: center;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
}

#switch2DButton.modeIn,
#switch3DButton.modeIn {
  cursor: default;
  color: #fff;
}
</style>