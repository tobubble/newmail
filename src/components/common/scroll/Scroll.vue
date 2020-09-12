<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

import {debounce} from 'common/utils'

BScroll.use(Pullup);

export default {
  data() {
    return {
      scroll: null,
      refresh: null
    };
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 设置 scroll 是否能够下拉 
      pullUpLoad: true,
      // 设置 scroll 的监听
      probeType: 3,
      // 设置 scroll 内部是否可以监听点击事件
      click: true
    });

    this.refresh = debounce(() => {this.scroll.refresh()}, 50)
  }
}; 
</script>

<style lang='less' scoped>
  .wrapper {
    // 记住要相对定位
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
</style>