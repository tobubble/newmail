<template>
  <div class="tabbar-item" @click="itemClick">
    <div class="img" v-show="isShow">
      <slot name="img"></slot>
    </div>
    <div class="img" v-show="!isShow">
      <slot name="img2"></slot>
    </div>
    <div class="title" :class="checked">
      <slot name="title"></slot>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // isShow: true,
        ischecked: true
      }
    },
    props: {
      link: {
        type: String
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.link)
        // console.log(this.$route)
      }
    },
    computed: {
      isShow() {
        // indexOf(parms) 可以匹配当前字符串中是否含有 parms 中的字符串
        return this.$route.path.indexOf(this.link)
      },
      checked() {
        return {checked: !this.$route.path.indexOf(this.link)}
      }
    }
  }
</script>

<style lang='less' scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
  }

    .checked{
    color: deeppink;
  }
</style>