<template>
  <div class="good-category" :class="{goodCategory2: isFixed}" v-show="isShow">
    <div
      class="category-item"
      :class="{categoryItemActive: index === currentIndex}"
      v-for="(item, index) in category"
      :key="index"
      @click="itemClick(index)"
    >{{item}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        category: ['流行','新款','精选'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        // 将当前的 currentindex 替换成 index ，表明当前的索引正在被点击
        this.currentIndex = index
        this.$emit('itemClick', index)
      }
    },
    props: {
      isFixed: {
        type: Boolean,
        default: false
      },
      isShow: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang='less' scoped>
.good-category {
  background: #fff;

  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-around;

  padding: 10px 0 0;

  .category-item {
    width: 60px;
    height: 28px;
    text-align: center;
    border-bottom: none;
    color: #777;
  }

  .categoryItemActive {
    color: #ff1493;
    border-bottom: 2px solid #ff1493;
  }
}

.goodCategory2 {
  position: fixed;
  top: 44px;
  z-index: 999;
}
</style>