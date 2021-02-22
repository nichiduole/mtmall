<template>
  <div class="main-header">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center line">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style lang='less' scoped>
@import url("~@/assets/css/common.less");
.main-header {
  background-color: @maincolor;
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  .left {
    width: 60px;
  }
  .center {
    flex: 1;
    font-size: 20px;
  }
  .right {
    width: 60px;
  }
}
</style>
