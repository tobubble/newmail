<template>
  <div class="settle">
    <div class="check">
      <div
        class="allCheck"
        :class="{allChecked: $store.getters.isAllCkecked}"
        @click="checkClick"
      ></div>
      <span>全选</span>
    </div>

    <div class="settlePrice">
      <span class="allPrice">合计</span>
      <span class="allPrice">{{$store.getters.goodsPrice | showPrice}}</span>
    </div>

    <div class="settelCount">
      <div class="toSettle">去计算({{$store.getters.goodsCount}})</div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    showPrice(res) {
      return "￥" + res.toFixed(2);
    },
  },
  methods: {
    checkClick() {
      this.$store.dispatch('changeSelect')
    },
  },
};
</script>

<style lang='less' scoped>
.settle {
  position: fixed;
  bottom: 49px;
  width: 100%;
  display: flex;
  font-size: 13px;
  background: #eee;
  padding: 8px 10px;

  .check {
    flex: 2;
    display: flex;

    .allCheck {
      width: 16px;
      height: 16px;
      border: 1px solid silver;
      border-radius: 50%;
      background-color: #fff;
      background-image: url("~assets/img/cart/tick.svg");
    }
    .allChecked {
      background-color: deeppink;
      border: none;
      margin-right: 5px;
    }
  }

  .settlePrice {
    flex: 3;
    .allPrice {
      margin-left: 4px;
    }
  }

  .settelCount {
    flex: 3;
  }
}
</style>