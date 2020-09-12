<template>
  <div class="showImgWrapper" v-if="showImg.length != 0">
    <img v-for="(item, index) in showImg" :key="index" :src="item" alt="">
  </div>
</template>

<script>
  export default {
    props: {
      showImg: {
        type: Array
      }
    }
  }
</script>

<style lang='less' scoped>
  .showImgWrapper {
    img {
      width: 100%;
      margin-top: 20px;
    }
  }
</style>