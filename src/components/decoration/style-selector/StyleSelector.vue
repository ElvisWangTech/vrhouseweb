<template>
  <div class="styleSelector" :class="{phone: isPhone}">
    <select id="style-select" v-model="selected" @change="handleChange">
      <option v-for="styleItem in styleList" v-bind:key="styleItem.ID" :value="styleItem.value">{{styleItem.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "style-selector",
  props: ["isPhone", "styleList"],
  data() {
    return {
      selected: "Blank"
    };
  },
  methods: {
    handleChange(index) {
      /** 切换风格*/
    }
  }
};
</script>

<style scoped>
#style-select {
  position: absolute;
  margin-left: 20px;
  width: 60px;
  height: 30px;
  background: none;
  font-size: 16px;
  color: white;
  font-weight: bold;
  border: 1px solid white !important;
}
#style-select > option {
  background: #ccc;
  font-size: 16px;
  color: white;
  font-weight: bold;
}
#style-select:active {
  border: 1px solid white;
}
</style>>
