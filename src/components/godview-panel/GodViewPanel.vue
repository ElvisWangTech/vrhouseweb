<template>
  <div id="floorPlanDiv">
    <div id="roomInfo"></div>
    <div id="small-view-container"></div>
    <div id="switch-2d-3d-btn-group">
      <button id="switch3DButton" class="modeIn"></button>
      <button id="switch2DButton"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "godview-panel",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
