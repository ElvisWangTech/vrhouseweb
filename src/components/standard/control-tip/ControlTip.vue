<template>
  <div id="controlTip" class="pc centered tip zIndex100" style="display: none;">
    <table>
      <tr>
        <td id="controlTip_rotate"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "control-tip",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
