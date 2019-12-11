<template>
  <div id="thumbnail-list" class="background-trans" v-show="!isCollapse" :class="{phone: isPhone}" :scrollLeft="scrollLeft" ref="thumbnailController">
    <div id="naviLeft" class="ico-navi img-bottom img-opacity" :class="{'disabled': selIndex === 0}" v-show="!isPhone" @click="handleNaviClick('prev')"></div>
    <div id="thumbnails" style="display: inline-block; white-space: nowrap;">
      <div class="thumbnail_group" :class="{phone: isPhone}" v-for="(item, index) in thumbnailList" v-bind:key="item.ID" @click="handleThumbClick(index)"
      :style="{display:(index >= l && index <= r)?'inline-block':'none'}">
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
      default: ()=>{}
    },
    clientWidth: {
      type: Number,
      default: 0
    }
  },
  watch: {
    clientWidth() {
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
      return this.thumbnailList.length
    }
  },
  methods: {
    handleThumbClick(index){
      this.selIndex = index;
      var thumbnail = this.thumbnailList[index];
      if (thumbnail && thumbnail.onclick) {
        thumbnail.onclick(thumbnail.ID);
      }
    },
    handleNaviClick(dir) {
      var index = this.selIndex;
      var newIndex = index;
      if (dir === 'next') {
        if (index + 1 >= this.totalThumbs) return; 
        newIndex = index + 1;
      } else {
        if (index - 1 < 0) return;
        newIndex = index - 1;
      }
      this.handleThumbClick(newIndex);
      this.setSelectedThumbnailVisible();
    },
    getBackground(item) {
      return `background: url('${item.ImagePath}') no-repeat center;background-size: cover;background-position-x: 0;`
    },
    moveThumbnails() {
      var thumbnailControllerWidth = this.$refs.thumbnailController.offsetWidth;
      var onePageSize = Math.floor((thumbnailControllerWidth - 28) / 110);
      var isPhone = this.isPhone;
      var totalThumbs =  this.totalThumbs;
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
    }
  },
  mounted() {
    this.thumbnailControllerWidth = this.$refs.thumbnailController.outerWidth;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
