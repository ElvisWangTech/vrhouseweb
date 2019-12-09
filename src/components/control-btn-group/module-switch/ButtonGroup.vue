<template>
  <div id="controlDiv" class="zIndex100">
    <div id="addAnchorButton" style="top:10px;" class="img-addAnchor controller_right"></div>
    <div id="mosaicButton" style="top:60px;" class="img-mosaic controller_right"></div>
    <div id="screenShot" style="top:110px;" class="img-screenShot controller_right"></div>
    <div id="uploadButton" style="top:160px;" class="img-upload controller_right"></div>
    <div id="recordButton" style="top:190px;" class="img-record controller_right"></div>
    <div id="replayButton" style="top:230px;" class="img-replay controller_right"></div>
    <div id="measureWallButton" style="top:230px;" class="img-measureWall controller_right"></div>
    <div id="measureLineButton" style="top:269px;" class="img-measureLine controller_right"></div>
    <div id="measureGridButton" style="top:308px;" class="img-measureGrid controller_right"></div>
    <div id="addCubeButton" style="top:347px;" class="img-addCube controller_right"></div>
    <div id="measureDeleteButton" style="top:386px;" class="img-measureDelete controller_right"></div>
  </div>
</template>

<script>
export default {
  name: "button-group",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
