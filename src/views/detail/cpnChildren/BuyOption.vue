<template>
  <div class="buyOptions">
    <div class="optionLeft">
      <div class="serviceWrapper common">
        <div class="sprite"></div>
        <span>客服</span>
      </div>
      <div class="shopWrapper common">
        <div class="sprite"></div>
        <span>店铺</span>
      </div>
      <div class="collectWrapper common">
        <div class="sprite"></div>
        <span>收藏</span>
      </div>
    </div>

    <div class="optionRight">
      <div class="addCart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
};
</script>

<style lang='less' scoped>
.buyOptions {
  display: flex;
  height: 49px;
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;

  .optionLeft {
    flex: 1;
    background: #fff;
    display: flex;
    font-size: 13px;

    .common {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .serviceWrapper {
      flex: 1;
      // background: fuchsia;
      .sprite {
        background-position: 0px -56px;
      }
    }

    .shopWrapper {
      flex: 1;
      .sprite {
        background-position: 0px -105px;
      }
    }

    .collectWrapper {
      flex: 1;
      .sprite {
        background-position: 0px 0px;
      }
    }

    .sprite {
      width: 24px;
      height: 24px;
      background-image: url("~assets/img/detail/detail_bottom.png");
      background-size: cover;
    }
  }

  .optionRight {
    flex: 1;
    display: flex;
    font-size: 15px;
    text-align: center;
  line-height: 49px;
    .addCart {
      flex: 1;
      background: #ffe817;
      color: #333;
    }

    .buy {
      flex: 1;
      background: #ff6699;
      color: #fff;
    }
  }
}
</style>