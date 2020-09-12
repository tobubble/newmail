<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div class="title">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommend: {
        type: Array
      }
    }
  }
</script>

<style lang='less' scoped>
  .recommend {
    display: flex;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 5px solid rgb(204,204,204);

    .recommend-item{
      flex: 1;
      text-align: center;

      img {
        width: 70px;
      }

      .title {
        font-size: 14px;
        color: #464646;
      }
    }
  }
</style>