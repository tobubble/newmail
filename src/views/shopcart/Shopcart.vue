<template>
  <div class="shopCart">
    <nav-bar ref="navbar"></nav-bar>
    <scroll class="scroll" ref="scroll">
      <goods-list></goods-list>
    </scroll>
    <bottom-settle></bottom-settle>
  </div>
</template>

<script>
import NavBar from "./cpnChildren/NavBar";
import GoodsList from "./cpnChildren/GoodsList";
import BottomSettle from "./cpnChildren/BottomSettle";

import Scroll from "components/common/scroll/Scroll";

export default {
  components: {
    NavBar,
    GoodsList,
    BottomSettle,
    Scroll,
  },
  methods: {
    // imgLoad() {
    //   this.$refs.scroll.refresh()
    // },
  },
  activated() {
    this.$refs.scroll.refresh()
  }
};
</script>
 
<style lang='less' scoped>
  .scroll {
    bottom: 81px;
  }
</style>
