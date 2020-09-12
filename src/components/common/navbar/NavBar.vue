<template>
  <div class="nav-bar" :style="{background: background}">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: 'rgb(255,129,152)'
    }
  }
};
</script>

<style lang='less' scoped>
.nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  display: flex;
  height: 44px;
  // background: rgb(255,129,152);
  line-height: 44px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .2);

  .left,
  .right{
    flex: 1;
  }

  
  .middle{
    flex: 4;
    color: #fff;
  }

  
  .right,
  .middle,
  .left{
    display: flex;
    justify-content: space-evenly;
  }
}
</style>