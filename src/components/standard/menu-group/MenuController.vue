<template>
  <div id="thumbnail-control-button" class="background-trans" :class="{down: isCollapse, phone: isPhone}">
    <span @click="handleIcoClick">
      <i id="icoPlayer" v-show="menuIcons.icoPlayer.enabled" :class="menuIcons.icoPlayer.active?'ico-pause':'ico-video'"></i>
      <i id="icoRuler" v-show="menuIcons.icoRuler.enabled" :class="menuIcons.icoRuler.active?'ico-ruler':'ico-ruler-off'"></i>
      <i id="icoVr" v-show="menuIcons.icoVr.enabled" class="ico-vr"></i>
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
      default: ()=>{}
    }
  },
  methods: {
    handleToggleClick() {
      this.$parent.toggle();
    },
    handleIcoClick(evt) {
      var selIcon = evt.target || evt.srcElement;
      if (selIcon.tagName !== 'I') return;
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
<style scoped>
#thumbnail-control-button>span {
  padding: unset;
}
#thumbnail-control-button {
  white-space: nowrap;
  padding-left: unset;
}
</style>
