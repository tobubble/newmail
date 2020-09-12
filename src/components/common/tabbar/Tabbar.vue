<template>
  <div class="tabbar">
    <tabbar-item link="/home">
      <img slot="img" src="~assets/img/tabbar/home.svg" alt />
      <img slot="img2" src="~assets/img/tabbar/home_active.svg" alt />
      <span slot="title">首页</span>
    </tabbar-item>
    <tabbar-item link="/category">
      <img slot="img" src="~assets/img/tabbar/category.svg" alt />
      <img slot="img2" src="~assets/img/tabbar/category_active.svg" alt />
      <span slot="title">分类</span>
    </tabbar-item>
    <tabbar-item link="/shopcart">
      <img slot="img" src="~assets/img/tabbar/cart.svg" alt />
      <img slot="img2" src="~assets/img/tabbar/cart_active.svg" alt />
      <span slot="title">购物车</span>
    </tabbar-item>
    <tabbar-item link="/profile">
      <img slot="img" src="~assets/img/tabbar/profile.svg" alt />
      <img slot="img2" src="~assets/img/tabbar/profile_active.svg" alt />
      <span slot="title">我的</span>
    </tabbar-item>
  </div>
</template>

<script>
import TabbarItem from "./TabbarItem";

export default {
  name: "tabbar",
  components: {
    TabbarItem,
  }
};
</script>

<style lang='less' scoped>
.tabbar {
  position: fixed;

  bottom: 0;
  height: 49px;
  width: 100%;
  background: rgb(246,246,246);

  display: flex;
  font-size: 14px;
  box-shadow: 0 -3px 3px rgba(0, 0, 0, .1);

  img {
    margin-top: 3px;
    width: 24px;
    vertical-align: middle;
  }
}
</style>