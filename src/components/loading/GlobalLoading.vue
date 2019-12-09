<template>
  <div id="loading_controller" class="zIndex100 centered">
    <div class="logo"><img src="@/assets/textures/logo.gif"></div>
    <div id="loading_bar">
      <div id="loading_progress_bar"></div>
    </div>
    <div class="slogan"><img src="@/assets/textures/slogan.png"></div>
  </div>
</template>

<script>
export default {
  name: "global-loading",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
