<template>
  <div class="collapse" :class="{phone: isPhone}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "collapse",
  props: ["isPhone", "isCollapse", "animateclass"],
  data() {
    return {
      collapse: false
    };
  },
  mounted() {
    let isPhone = this.isPhone;
    this.$children.forEach((child, index) => {
      child.isPhone = isPhone;
    });
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse;
    },
    setCollapseState() {
      let collapse = this.collapse;
      this.$children.forEach((child, index) => {
        child.isCollapse = collapse;
      });
    }
  },
  watch: {
    // 内部改变
    collapse() {
      this.setCollapseState();
    },
    // 外部改变
    isCollapse(val) {
      this.collapse = val;
    }
  }
};
</script>

<style scoped>
.collapse {
  z-index: 99;
  position: fixed;
  min-height: 34px;
  line-height: 1;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 1px 0 0 0;
  background-color: rgba(0, 0, 0, 0);
  pointer-events: none;
  user-select: none;
}

.collapse:not(.phone) {
  max-width: 980px;
  left: 110px;
  right: 110px;
}

.collapse:not(.phone):before {
  position: fixed;
  top: unset;
  left: 0;
  bottom: 0;
}

.collapse.collap {
  transform: translateY(1px);
  height: 80px;
}

.collapse.decoration {
  transform: none;
  bottom: -8px;
}
.background-trans {
  /* Fallback for web browsers that don't support RGBa */
  background-color: rgb(0, 0, 0);
  /* RGBa with 0.6 opacity */
  background-color: rgba(0, 0, 0, 0.3);
  /* For IE 5.5 - 7*/
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
  /* For IE 8*/
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
}
</style>>
