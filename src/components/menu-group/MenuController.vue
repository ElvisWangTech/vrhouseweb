<template>
  <div id="thumbnail-control-button" class="background-trans" :class="{down: isCollapse, phone: isPhone}">
    <span>
      <a class="ico-phone"></a>
      <i id="playToggle" class="ico-pause on"></i>
      <i id="switchRulerButton" class="ico-ruler-off on"></i>
      <i id="switchVRButton" class="ico-vr"></i>
    </span>
    <i class="ico-delta" @click="handleToggleClick()"></i>
    <div class="safe-area-inset-right"></div>
  </div>
</template>

<script>
export default {
  name: "menu-controller",
  methods: {
    handleToggleClick() {
      this.$parent.toggle();
    }
  },
  data() {
    return {
      isCollapse: false,
      isPhone: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
