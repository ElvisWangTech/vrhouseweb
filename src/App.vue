<template>
  <div id="app">
    <global-loading/>
    <default-floor-switch/>
    <button-group/>
    <default-scene-switch/>
    <godview-panel/>
    <menu-controller/>
    <thumbnail-controller/>
    <slogan/>
    <logo/>

    <div id="vr_house_container"></div>

    <div id="welcome" class="zIndex100"></div>

    <div id="disclaimer" class="zIndex100">
        <div id="disclaimer_tip">wifi环境下浏览更顺畅 · 实际情况以现场实勘为准</div>
    </div>

    <div id="loadRoomFailedTip" class="centered zIndex100"></div>

    <div id="mosaicMenu" class="zIndex100" hidden>
        <span class="item"><span>打码模式<select id="mosaicMode"><option value="Default">默认</option>
            <option value="Gauss">高斯模糊</option></select></span></span>
        <span class="item"><span>马赛克大小</span><i class="decrease"></i><input id="mosaicSize" type="range" min="128"
                max="2048" value="256" step="16"><i class="ico-plus"></i></span>
        <span class="item"><span>像素块尺寸</span><i class="decrease"></i><input id="mosaicStep" type="range" min="8"
                max="64" value="32" step="4"><i class="ico-plus"></i></span>
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
  </div>
</template>

<script>
import {
    GlobalLoading,
    RoomLoading,
    DefaultFloorSwitch,
    ButtonGroup,
    DefaultSceneSwitch,
    GodViewPanel,
    MenuController,
    ThumbnailController,
    Slogan,
    Logo,
    ControlTip,
    ControlTip2D,
    ControlTip3D,
    vrStartTip,
} from './components'
export default {
  name: 'App',
  components: {
    'global-loading': GlobalLoading,
    'room-loading': RoomLoading,
    'default-floor-switch': DefaultFloorSwitch,
    'button-group': ButtonGroup,
    'default-scene-switch': DefaultSceneSwitch,
    'godview-panel': GodViewPanel,
    'menu-controller': MenuController,
    'thumbnail-controller': ThumbnailController,
    'slogan': Slogan,
    'logo': Logo,
    'control-tip': ControlTip,
    'control-tip-2D': ControlTip2D,
    'control-tip-3D': ControlTip3D,
    'vr-start-tip': vrStartTip,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
