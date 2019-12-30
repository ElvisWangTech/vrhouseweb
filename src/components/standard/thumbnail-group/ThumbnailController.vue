<template>
  <div id="thumbnail-list" class="background-trans" v-show="!isCollapse" :class="{phone: isPhone}" :scrollLeft="scrollLeft" ref="thumbnailController">
    <div id="naviLeft" class="ico-navi img-bottom img-opacity" :class="{'disabled': selIndex === 0}" v-show="!isPhone" @click="handleNaviClick('prev')"></div>
    <div id="thumbnails" style="display: inline-block; white-space: nowrap;">
      <div class="thumbnail_group" :class="{phone: isPhone}" v-for="(item, index) in thumbnailList" v-bind:key="item.ID" @click="handleThumbClick(index)" :style="{display:(index >= l && index <= r)?'inline-block':'none'}">
        <div class="thumbnail-normal" :class="{phone: isPhone, 'thumbnail-unselected': index !== selIndex}">
          <div :style="getBackground(item)"></div>
          <div class="thumbnail-caption text-overlay-bg-trans"><span class="thumbnail_name" style="display: inline-block">{{item.Name}}</span></div>
        </div>
      </div>
    </div>
    <div id="naviRight" class="ico-navi img-bottom img-opacity" :class="{'disabled': selIndex + 1 === totalThumbs}" v-show="!isPhone" @click="handleNaviClick('next')"></div>
  </div>
</template>

<script>
export default {
  name: "ThumbnailController",
  props: {
    thumbnailList: {
      type: Array,
      default: () => {}
    },
    clientWidth: {
      type: Number,
      default: 0
    }
  },
  watch: {
    clientWidth() {
      this.moveThumbnails();
    },
    thumbnailList() {
      this.moveThumbnails();
    }
  },
  data() {
    return {
      isCollapse: false,
      isPhone: false,
      onePageSize: 0,
      thumbnailControllerWidth: 0,
      naviLeftVisible: true,
      naviRightVisible: true,
      scrollLeft: 0,
      selIndex: 0,
      l: 0,
      r: 1000
    };
  },
  computed: {
    totalThumbs() {
      return this.thumbnailList.length;
    }
  },
  methods: {
    handleThumbClick(index) {
      this.selIndex = index;
      var thumbnail = this.thumbnailList[index];
      if (thumbnail && thumbnail.onclick) {
        thumbnail.onclick(thumbnail.ID);
      }
      // 更新currHotSpot 和 currRoom
      this.$store.dispatch("setCurrHotSpot", thumbnail.ID);
    },
    handleNaviClick(dir) {
      var index = this.selIndex;
      var newIndex = index;
      if (dir === "next") {
        if (index + 1 >= this.totalThumbs) return;
        newIndex = index + 1;
      } else {
        if (index - 1 < 0) return;
        newIndex = index - 1;
      }
      this.handleThumbClick(newIndex);
      this.moveThumbnails();
    },
    getBackground(item) {
      return `background: url('${item.ImagePath}') no-repeat center;background-size: cover;background-position-x: 0;`;
    },
    moveThumbnails() {
      var thumbnailControllerWidth = this.$refs.thumbnailController.offsetWidth;
      var onePageSize = Math.floor((thumbnailControllerWidth - 28) / 110);
      var isPhone = this.isPhone;
      var totalThumbs = this.totalThumbs;
      if (this.isPhone) {
        onePageSize = Math.floor(this.clientWidth / 73);
      } else {
        if (onePageSize < totalThumbs) {
          onePageSize = Math.floor((thumbnailControllerWidth - 50) / 110);
          this.naviLeftVisible = true;
          this.naviRightVisible = true;
        } else {
          this.naviLeftVisible = false;
          this.naviRightVisible = false;
        }
      }
      this.thumbnailControllerWidth = thumbnailControllerWidth;
      this.onePageSize = onePageSize;

      this.setSelectedThumbnailVisible();
    },
    setSelectedThumbnailVisible() {
      var onePageSize = this.onePageSize;
      var totalThumbs = this.totalThumbs;
      var selIndex = this.selIndex;
      var halfPage = Math.floor(onePageSize / 2),
        l = Math.max(selIndex - halfPage, 0),
        r = Math.min(l + onePageSize - 1, totalThumbs - 1);

      if (l === 0) r = Math.min(onePageSize - 1, totalThumbs - 1);
      if (r === totalThumbs - 1) l = Math.max(r - onePageSize + 1, 0);

      if (this.isPhone) {
        this.scrollLeft = 73 * l;
      } else {
        this.l = l;
        this.r = r;
      }
      console.log("this.l: " + this.l);
      console.log("this.r: " + this.r);
    }
  },
  mounted() {
    this.thumbnailControllerWidth = this.$refs.thumbnailController.outerWidth;
    this.moveThumbnails();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thumbnail-normal {
  position: absolute;
  cursor: url(~@/assets/textures/hand.png), pointer;
  border: 1px solid #ffffff;
}

.thumbnail-normal.phone {
  border: none;
  cursor: auto;
}

.thumbnail-normal > div:nth-child(odd) {
  width: 88px;
  height: 62px;
}

.thumbnail-normal.phone > div:nth-child(odd) {
  width: 64px;
  height: 64px;
}

.thumbnail-caption {
  width: 100%;
  bottom: 0rem;
  position: absolute;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
}

.thumbnail-caption span {
  -webkit-font-smoothing: antialiased;
}

.thumbnail-unselected {
  border-color: rgba(255, 255, 255, 0.3);
}

.thumbnail-normal.phone:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  outline-offset: -2px;
  outline: 2px solid #fff;
  /*outline: 2px solid #ff8700;*/
}

.thumbnail-normal.thumbnail-unselected:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  filter: alpha(opacity=30);
  opacity: 0.3;
  outline: none;
}

.text-overlay-bg-trans {
  /* Fallback for web browsers that don't support RGBa */
  background-color: rgb(0, 0, 0);
  /* RGBa with 0.6 opacity */
  background-color: rgba(0, 0, 0, 0.6);
  /* For IE 5.5 - 7*/
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
  /* For IE 8*/
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
}

.thumbnail_group {
  margin: 0;
  padding: 10px;
  width: 90px;
  display: inline-block;
}

.thumbnail_group.phone {
  margin: 9px 0 9px 9px;
  padding: 0;
  width: 64px;
}

.thumbnail_group.phone:last-child {
  margin-right: 9px;
}

#thumbnail-list {
  pointer-events: auto;
  overflow: hidden;
  text-align: center;
  margin: 0;
  height: 82px;
  user-select: none;
}

#thumbnail-list.phone {
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

.thumbnail_name {
  font-size: 13px;
  vertical-align: middle;
  transform: translateY(-1px);
}

input.thumbnail_name {
  width: 100%;
}

.phone .thumbnail_name {
  font-size: 10px;
  vertical-align: top;
  transform: translateY(2px);
}

.phone .thumbnail-caption {
  padding: 1px 0;
}

#naviLeft,
#naviRight {
  width: 9px;
  line-height: 72px;
  text-align: center;
  vertical-align: top;
  color: #ffffff;
  font-size: 17px;
  display: inline-block;
}

#naviLeft {
  padding-top: 4px;
}

#naviRight {
  padding-bottom: 4px;
  transform: rotate(180deg);
}

#decId {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.4);
  vertical-align: bottom;
  height: 36px;
  line-height: 36px;
  margin-left: 10px;
  color: #fff;
  font-size: 14px;
  padding: 0 6px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

#buy {
  display: inline-block;
  background-color: rgba(255, 123, 0, 0.8);
  vertical-align: bottom;
  height: 36px;
  line-height: 36px;
  pointer-events: auto;
  margin-right: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  padding: 0 6px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>