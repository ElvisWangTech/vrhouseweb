<template>
  <div id="thumbnail-list" class="background-trans" style="display: none;">
    <div id="naviLeft" class="ico-navi img-bottom img-opacity" style="display: none;"></div>
    <div id="thumbnails" style="display: inline-block; white-space: nowrap;"></div>
    <div id="naviRight" class="ico-navi img-bottom img-opacity" style="display: none;"></div>
  </div>
</template>

<script>
export default {
  name: "ThumbnailController",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
