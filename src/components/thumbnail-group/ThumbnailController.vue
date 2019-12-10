<template>
  <div id="thumbnail-list" class="background-trans" v-show="!isCollapse">
    <div id="naviLeft" class="ico-navi img-bottom img-opacity"></div>
    <div id="thumbnails" style="display: inline-block; white-space: nowrap;" v-for="item in thumbnailList" v-bind:key="item.ID">
      <div class="thumbnail_group phone">
        <div class="thumbnail-normal phone thumbnail-unselected">
          <div :style="getBackground(item)"></div>
          <div class="thumbnail-caption text-overlay-bg-trans"><span class="thumbnail_name" style="display: inline-block">{{item.Name}}</span></div>
        </div>
      </div>
    </div>
    <div id="naviRight" class="ico-navi img-bottom img-opacity"></div>
  </div>
</template>

<script>
export default {
  name: "ThumbnailController",
  props: {
    thumbnailList: {
      type: Array,
      default: ()=>{}
    }
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    getBackground(item) {
      return `background: url('${item.ImagePath}') no-repeat center;background-size: cover;background-position-x: 0;`
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
