<template>
  <div class="goodDesc" v-if="Object.keys(goodInfo).length !== 0">
    <div class="title">{{goodInfo.title}}</div>

    <div class="goodPrice">
      <span class="lowPrice">{{goodInfo.price}}</span>
      <span class="highPrice">{{goodInfo.highPrice | showHighPrice}}</span>
      <span class="discount">{{goodInfo.discount}}</span>
    </div>

    <div class="goodOther">
      <div class="sellQuantity">{{goodInfo.colums[0]}}</div>
      <div class="collect">{{goodInfo.colums[1]}}</div>
      <div class="sellMessage">{{goodInfo.services[2].name}}</div>
    </div>

    <div class="service">
      <div
        class="serviceWrapper"
        v-for="(item, index) in goodInfo.services"
        :key="index"
        v-show="index !== 3"
      >
        <img :src='item.icon' alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodInfo: {
      type: Object,
    },
  },
  filters: {
    showHighPrice(res) {
      return "￥" + res;
    },
  },
};
</script>

<style lang='less' scoped>
.goodDesc {
  padding: 15px 10px;

  .goodPrice {
    padding: 10px 0;

    span {
      margin-right: 10px;
    }

    .lowPrice {
      font-size: 22px;
      color: deeppink;
    }

    .highPrice {
      color: #666;
      font-size: 14px;
      text-decoration: line-through;
    }

    .discount {
      display: inline-block;
      background: deeppink;
      color: #fff;
      font-size: 14px;
      transform: translateY(-8px);
      border-radius: 8px;
      padding: 0 2px;
    }
  }

  .goodOther {
    display: flex;
    justify-content: space-between;
    color: #666;

    div {
      font-size: 14px;
    }
  }

  .service {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 20px;
    border-bottom: 2px solid rgb(240,240,240);

    span {
      font-size: 12px;
      color: #1e1e1e;
    }

    img {
      width: 15px;
      vertical-align: middle;
    }
  }
}
</style>