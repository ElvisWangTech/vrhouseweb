<template>
  <div id="thumbnail-control-button" class="background-trans">
    <span>
      <a class="ico-phone"></a>
      <i id="playToggle" class="ico-pause on"></i>
      <i id="switchRulerButton" class="ico-ruler-off on"></i>
      <i id="switchVRButton" class="ico-vr"></i>
    </span>
    <i class="ico-delta"></i>
    <div class="safe-area-inset-right"></div>
  </div>
</template>

<script>
export default {
  name: "menu-controller",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
