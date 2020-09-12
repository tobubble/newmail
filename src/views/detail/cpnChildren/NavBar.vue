<template>
  <nav-bar background="#fff" class="navbar">
    <img @click="backClick" slot="left" src="~assets/img/common/back.svg" alt />
    <span
      slot="middle"
      v-for="(item, index) in middleSlot"
      :key="index"
      @click="itemClick(index)"
      :class="{activeColor: currentIndex === index}"
    >{{item}}</span>
    <span></span>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
  methods: {
    backClick() {
      this.$emit("backClick");
    },
    itemClick(index) {
      this.$emit('itemClick', index)
    },
  },
  data() {
    return {
      middleSlot: ["商品", "参数", "评论", "推荐"]
    };
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  mounted() {

  }
};
</script>

<style lang='less' scoped>
.navbar {
  span {
    font-size: 14px;
    color: #000;
  }

  .activeColor {
    color: deeppink;
  }
}
</style>