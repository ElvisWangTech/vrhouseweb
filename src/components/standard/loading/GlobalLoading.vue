<template>
  <div>
    <div id="welcome" class="zIndex100" v-show="status===0 || status===1"></div>
    <div id="disclaimer" class="zIndex100" v-show="status===0 || status===1">
      <div id="disclaimer_tip">wifi环境下浏览更顺畅 · 实际情况以现场实勘为准</div>
    </div>
    <div id="loading_controller" class="zIndex100 centered" v-show="status===1">
      <div class="logo"><img src="@/assets/textures/logo.gif"></div>
      <div id="loading_bar">
        <div id="loading_progress_bar" :style="computeWidth"></div>
      </div>
      <div class="slogan"><img src="@/assets/textures/slogan.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "global-loading",
  props: {
    loadingStatus: {
      type: Number,
      default: 0
    },
    loadingProgress: {
      type: Number,
      default: 0.0
    }
  },
  data() {
    return {
      progress: this.loadingProgress,
      status: this.loadingStatus
    };
  },
  computed: {
    computeWidth() {
      return "width:" + this.progress * 100 + "%";
    }
  },
  watch: {
    loadingProgress: {
      immediate: true,
      handler(prog) {
        this.progress = prog;
      }
    },
    loadingStatus: {
      immediate: true,
      handler(status) {
        this.status = status;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loading_bar {
  display: block;
}
</style>
