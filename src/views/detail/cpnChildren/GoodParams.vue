<template>
  <div class="goodParams" v-if="Object.keys(GoodsParam).length !== 0">
    <div class="size" v-for="(item, index) in GoodsParam.sizes[0]" :key="index">
      <div class="params" v-for="(item1, index) in item" :key="index">{{item1}}</div>
    </div>

    <div class="color" v-for="(item, index) in GoodsParam.info" :key="index + item">
      <div class="key">
        {{item.key}}
      </div>
      <div class="value">
        {{item.value}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    GoodsParam: {
      type: Object,
    },
  },
};
</script>

<style lang='less' scoped>
.goodParams {
  padding: 20px 15px;
  .size {
    display: flex;
    color: #666;
    border-bottom: 1px solid silver;
    // padding-bottom: 30px;

    .params:nth-child(1) {
      flex: 6;
    }

    .params:nth-child(2) {
      flex: 4;
    }

    .params:nth-child(3) {
      flex: 3;
    }

    .params:nth-child(4) {
      flex: 4;
    }

    .params {
      font-size: 14px;
      line-height: 41px;
    }
  }

  .color {
    display: flex;
    border-bottom: 1px solid silver;
    font-size: 14px;

    .key {
      flex: 2;
      color: #666;
      margin-top: 14px;
      margin-bottom: 14px;
    }

    .value {
      flex: 4;
      margin-top: 14px;
      margin-bottom: 14px;
      line-height: 20px;
      color: deeppink;
    }
  }
}
</style>