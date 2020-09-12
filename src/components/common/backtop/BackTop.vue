<template>
  <div class="back_top" v-show="isBackShow">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    props: {
      isBackShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang='less' scoped>
  .back_top{
    position: fixed;
    bottom: 55px;
    right: 20px;
    z-index: 999;
     
     img {
       width: 50px;
     }
  }
</style>