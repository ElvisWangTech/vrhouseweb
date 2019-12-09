<template>
  <div id="vrStartTip" class="zIndex100">
    <img src="@/assets/textures/vrTip.png">
    <div>
      <div>将手机横屏放入VR眼镜中</div>
      <div>将视角中的圆圈对准房间名后即可前进观看</div>
      <div>手机竖屏后，任意位置触屏即可退出</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vr-start-tip",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
