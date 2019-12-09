<template>
  <div id="controlTip3D" class="pc centered tip zIndex100" style="display: none;">
    <table>
      <tr>
        <td id="controlTip_scale3D"></td>
        <td id="controlTip_rotate3D"></td>
        <td id="controlTip_move3D"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "control-tip-3D",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
