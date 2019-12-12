<template>
  <div id="largeViewSwitchController" class="zIndex100" style="display: none;">
    <div id="showOtherFloorPlanDiv" class="pc">
      <input id="showOtherFloorPlanCheckBox" type="checkbox" />
      <label for="showOtherFloorPlanCheckBox">其它</label>
    </div>

    <div id="enterPanoramaViewBtn"></div>
    <div id="largeViewSwitch2DButton"></div>
    <div id="largeViewSwitch3DButton" class="modeIn"></div>
  </div>
</template>

<script>
export default {
  name: "default-scene-switch",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
