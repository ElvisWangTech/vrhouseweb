<template>
  <div id="app">
    <default-floor-switch />
    <button-group :buttons="buttons" />
    <default-scene-switch />
    <godview-panel :room-info="currRoomInfo" :mode="activeMode" :init-status="godviewPanelInitStatus" />
    <collapse :is-phone="checkPhone()" :is-collapse="true" animateclass="slideup">
      <menu-controller :menu-icons="menuIcons" />
      <thumbnail-controller :thumbnail-list="thumbnailList" :client-width="screen.clientWidth" />
    </collapse>
    <slogan />
    <logo />

    <div id="vr_house_container"></div>

    <div id="loadRoomFailedTip" class="centered zIndex100"></div>

    <div id="mosaicMenu" class="zIndex100" hidden>
      <span class="item"><span>打码模式<select id="mosaicMode">
            <option value="Default">默认</option>
            <option value="Gauss">高斯模糊</option>
          </select></span></span>
      <span class="item"><span>马赛克大小</span><i class="decrease"></i><input id="mosaicSize" type="range" min="128" max="2048" value="256" step="16"><i class="ico-plus"></i></span>
      <span class="item"><span>像素块尺寸</span><i class="decrease"></i><input id="mosaicStep" type="range" min="8" max="64" value="32" step="4"><i class="ico-plus"></i></span>
      <span><button id="clearMosaics">清除所有马赛克</button><button id="saveMosaics">保存</button></span>
      <button id="exitMosaicMode">退出</button>
    </div>

    <div id="screenShotMenu" class="zIndex100" hidden>
      <button class="type"><input type="radio" name="shotType" value="" checked>实勘图</button>
      <button class="type"><input type="radio" name="shotType" value="cover">封面图</button>
      <button id="takeScreenShot">截图</button>
      <button id="exitScreenShot">退出</button>

      <div id="confirmDownload">
        <div>
          <span contenteditable="true"></span><i class="ico-close" onclick="$('#confirmDownload').hide();"></i>
        </div>
        <img>
        <a>确认并下载</a>
      </div>
    </div>
    <global-loading v-bind:loading-status="loadingStatus" v-bind:loading-progress="loadingProgress" />
  </div>
</template>

<script>
import Util from "./utils";
import Fetcher from "./fetcher";
import Config from "./config";
import Button from "./models/Button";
import { StandardComs, DecorationComs } from "./components";

let buttons = [];
for (let bcKey in Config.buttons) {
  let bc = Config.buttons[bcKey];
  let btn = new Button();
  btn.ID = bc.id;
  btn.ImageClass = bc.imageClass;
  btn.Name = bc.name;
  btn.Onclick = bc.onclick;
  btn.Style = bc.style;
  btn.Enabled = bc.enabled;
  btn.Active = bc.active;
  buttons.push(btn);
}

export default {
  name: "App",
  components: {
    "global-loading": StandardComs.GlobalLoading,
    "room-loading": StandardComs.RoomLoading,
    "default-floor-switch": StandardComs.DefaultFloorSwitch,
    "button-group": StandardComs.ButtonGroup,
    "default-scene-switch": StandardComs.DefaultSceneSwitch,
    "godview-panel": StandardComs.GodViewPanel,
    "menu-controller": StandardComs.MenuController,
    "thumbnail-controller": StandardComs.ThumbnailController,
    slogan: StandardComs.Slogan,
    logo: StandardComs.Logo,
    collapse: StandardComs.Collapse,
    "control-tip": StandardComs.ControlTip,
    "control-tip-2D": StandardComs.ControlTip2D,
    "control-tip-3D": StandardComs.ControlTip3D,
    "vr-start-tip": StandardComs.vrStartTip
  },
  data() {
    return {
      loadingStatus: this.$store.state.loadingStatus,
      loadingProgress: this.$store.state.loadingProgress,
      isPhone: Util.checkIsPhone(),
      thumbnailList: [],
      menuIcons: Config.menuIcons,
      buttons: buttons,
      screen: {
        clientWidth: 0,
        clientHeight: 0
      },
      currRoom: {},
      currHotSpot: {},
      activeMode: "3D",
      godviewPanelInitStatus: Config.godviewPanel
    };
  },
  computed: {
    currRoomInfo() {
      var hotSpotName = this.currHotSpot.Name;
      var currRoomArea = this.currRoom.Area || 0;
      return hotSpotName + ":" + Util.formatAreaString(currRoomArea);
    }
  },
  watch: {
    "$store.state.loadingProgress": function(value) {
      this.loadingProgress = value;
    },
    "$store.state.loadingStatus": function(value) {
      this.loadingStatus = value;
    },
    "$store.state.currHotSpot": function(value) {
      this.currHotSpot = value;
      this.currRoom = this.$store.state.currRoom;
    }
  },
  methods: {
    loadResources() {
      console.log("load resources..");
      // 出于演示目的模拟加载效果
      let progress = 0;
      let $store = this.$store;
      $store.dispatch("startLoading");
      let self = this;
      // 获取viewData数据
      Fetcher.getViewData(res => {
        console.log("got viewdata: ", res.data);
        $store.dispatch("setViewData", res.data);
        self.thumbnailList = $store.getters.thumbnails;
        self.currHotSpot = $store.getters.currHotSpot;
        self.currRoom = $store.state.currRoom;
      });

      let timer = setInterval(function() {
        $store.dispatch("progressLoading", (progress += 0.1));
        if (progress >= 1) {
          $store.dispatch("endLoading");
          clearInterval(timer);
        }
      }, 100);
    },
    checkPhone() {
      return this.isPhone ? "phone" : "";
    },
    handleResize() {
      // TODO ...
      this.screen.clientWidth = document.documentElement.clientWidth;
      this.screen.clientHeight = document.documentElement.clientHeight;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  mounted() {
    console.log("mounted");
    this.loadResources();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: lightskyblue;
}
</style>
