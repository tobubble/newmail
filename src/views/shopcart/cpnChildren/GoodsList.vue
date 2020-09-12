<template>
  <div class="goodList">
    <div v-for="(item, index) in $store.state.shopCart" :key="index" class="goodItem" @click="refresh">
      <div class="checkButton">
        <div class="check" :class="{checked: item.isChecked}" @click="checkClick(item)"></div>
      </div>

      <img :src="item.image" @load='imgLoad' alt />

      <div class="itemRightWrapper">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="countPrice">
          <div class="price">{{item.price | showPrice}}</div>
          <div class="count">{{item.count | showCount}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    showPrice(res) {
      return "￥" + res;
    },
    showCount(res) {
      return "x" + res;
    },
  },
  computed: {
    showCount() {
      return function (index) {
        return this.$store.state.shopCart[index].count
      }
    }
  },
  methods: {
    refresh() {
      this.$forceUpdate()
    },
    imgLoad() {
      this.$emit('imgLoad')
    },
    checkClick(item) {
      this.$store.commit('changeCheck', item)
    }
  }
};
</script>

<style lang='less' scoped>
.goodList {
  // padding-top: 45px;
  display: flex;
  flex-direction: column;

  .goodItem {
    display: flex;
    border-bottom: 1px solid silver;
    padding: 10px 0;
  }

  .checkButton {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .check {
      width: 16px;
      height: 16px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid silver;
      background-image: none;
    }

    .checked {
      background: deeppink;
      background-image: url("~assets/img/cart/tick.svg");
      border-radius: 50%;
    }
  }

  img {
    width: 112px;
    height: 140px;
  }

  .itemRightWrapper {
    display: flex;
    flex-direction: column;
    flex: 10;
    justify-content: space-between;
    padding: 15px 0;

    .countPrice {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;

      .price {
        color: #ff8198;
      }
    }
  }

  .title,
  .desc {
    overflow: hidden;
    width: 240px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
  }

  .title {
    color: #333;
  }

  .desc {
    color: #666;
  }
}
</style>