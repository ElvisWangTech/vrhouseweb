<template>
  <div id="thumbnail-control-button" class="background-trans" :class="{down: isCollapse, phone: isPhone}">
    <span @click="handleIcoClick">
      <i id="icoPlayer" v-show="menuIcons.icoPlayer.enabled" :class="menuIcons.icoPlayer.active?'ico-pause':'ico-video'">
        <span>{{menuIcons.icoPlayer.active?$t('buttons.icoPlayer-pause'):$t('buttons.icoPlayer-play')}}</span>
      </i>
      <i id="icoRuler" v-show="menuIcons.icoRuler.enabled" :class="menuIcons.icoRuler.active?'ico-ruler':'ico-ruler-off'">
        <span>{{menuIcons.icoRuler.active?$t('buttons.icoRuler-close'):$t('buttons.icoRuler-open')}}</span>
      </i>
      <i id="icoVr" v-show="menuIcons.icoVr.enabled" class="ico-vr">
        <span>{{$t('buttons.icoVr')}}</span>
      </i>
    </span>
    <i class="ico-delta" @click="handleToggleClick()"></i>
    <div class="safe-area-inset-right"></div>
  </div>
</template>

<script>
export default {
  name: "menu-controller",
  props: {
    menuIcons: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleToggleClick() {
      this.$parent.toggle();
    },
    handleIcoClick(evt) {
      var selIcon = evt.target || evt.srcElement;
      if (selIcon.tagName !== "I") return;
      var menuIcons = this.menuIcons;
      menuIcons[selIcon.id].active = !menuIcons[selIcon.id].active;
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
<style lang="stylus"  scoped>
#thumbnail-control-button {
  display: flex;
  pointer-events: auto;
  cursor: url('~@/assets/textures/hand.png'), pointer;
  height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  margin: 0 auto 0 0;
  white-space: nowrap;
  font-size: 14px;
  overflow: hidden;
  text-overflow: clip;
  word-break: break-all;
  color: #fff;
  text-align: left;
  vertical-align: bottom;
  user-select: none;

  &:not(.phone) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
}

#thumbnail-control-button > .brokerImg {
  display: none;
  width: 40px;
  height: 40px;
  margin: 10px 0;
  object-fit: cover;
  border-radius: 50%;
}

#thumbnail-control-button > span {
  flex: 1;
  font-size: 28px;
}

#thumbnail-control-button.phone > span {
  padding: 0 15px;
}

#thumbnail-control-button.phone > span {
  display: flex;
  justify-content: space-around;
}

#thumbnail-control-button > span > i {
  display: inline-block;
  text-align: center;
  margin-top: 7px;
  width: 80px;
}

#thumbnail-control-button > span > i > span {
  font-size: 12px;
  display: block;
  padding-top: 6px;
}

#thumbnail-control-button.phone > span > i {
  width: unset;
}

#thumbnail-control-button > i.ico-delta {
  float: right;
  height: 60px;
  line-height: 60px;
  width: 44px;
  text-align: center;
}

#thumbnail-control-button.down > i.ico-delta {
  transform: rotate(180deg);
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
</style>
