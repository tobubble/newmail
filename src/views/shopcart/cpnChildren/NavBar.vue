<template>
  <nav-bar class="nav-bar" background="#fff" @click="aaa">
    <span slot="middle">购物车 {{"(" + $store.getters.goodsCount + ")"}}</span>
    <span slot="left" @click="back">
      <img src="~assets/img/common/back.svg" alt />
    </span>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    aaa() {
      this.$forceUpdate()
    }
  },
  computed: {
    showCount() {
      return this.$store.state.shopCart.reduce((a, b) => {
        return a + b.count
      },0)
    }
  }
   
};
</script>

<style lang='less' scoped>
.nav-bar {
  span {
    color: black;
  }

  img {
    vertical-align: middle;
  }
}
</style>