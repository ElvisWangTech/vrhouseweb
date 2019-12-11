<template>
  <div id="controlDiv" class="zIndex100">
    <div v-for="(b, index) in buttons" v-bind:key="b.ID" :id="b.ID" :style="{...b.Style}" :class="b.ImageClass" class="controller_right" v-show="b.Enabled" @click="handleBtnClick(index)"></div>
  </div>
</template>

<script>
export default {
  name: "button-group",
  props: {
    'buttons': {
      type: Array,
      default: ()=>{}
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    handleBtnClick(index) {
      let btn = this.buttons[index];
      if (btn && btn.Onclick) {
        btn.Onclick(btn.ID);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addAnchorButton {
    opacity: .66;
    filter: alpha(opacity=66);
}

#addAnchorButton.select {
    opacity: 1;
    filter: alpha(opacity=100);
}

#mosaicButton {
    opacity: 1;
    filter: alpha(opacity=100);
}

.img-addAnchor {
    background: url("~@/assets/textures/editor/addAnchor.png") center / 100% 100%;
}

.img-upload {
    background: url("~@/assets/textures/editor/upload.png") center / 100% 100%;
}

.img-screenShot {
    background: url("~@/assets/textures/editor/screenShot.png") center / 100% 100%;
}

.img-mosaic {
    background: url("~@/assets/textures/editor/addMosaic.png") center / 100% 100%;
}

.img-captureVideo {
    background: url("~@/assets/textures/editor/captureVideo.png") center / 100% 100%;
    background-color: transparent !important;
}

.img-record {
    background-image: url("~@/assets/textures/record/record.png");
    background-size: 100% 100%;
}

.img-replay {
    background-image: url("~@/assets/textures/record/play.png");
    background-size: 100% 100%;
}

.img-measureWall {
    background-image: url("~@/assets/textures/measure/measureWall.png");
    background-size: 100% 100%;
}

.img-measureLine {
     background-image: url("~@/assets/textures/measure/measureLine.png");
     background-size: 100% 100%;
 }

.img-measureGrid {
    background-image: url("~@/assets/textures/measure/measureGrid.png");
    background-size: 100% 100%;
}

.img-addCube {
    background-image: url("~@/assets/textures/measure/addCube.png");
    background-size: 100% 100%;
}

.img-measureDelete {
    background-image: url("~@/assets/textures/measure/measureDelete.png");
    background-size: 100% 100%;
}

.controller_right {
    color: #fff;
    position: absolute;
    right: 17px;
    width: 30px;
    height: 30px;
    line-height: 30px !important;
    font-size: 14px;
    text-align: center;
    border-radius: 15px;
    cursor: url(~@/assets/textures/hand.png), pointer;
    background-color: rgba(0, 0, 0, .3);
}

.controller_right.phone {
    color: #fff;
    right: 10px;
    width: 32px;
    height: 32px;
    line-height: 32px !important;
    font-size: 20px;
    border-radius: 16px;
}
</style>
