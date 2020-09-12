<template>
  <div id="app">
    <keep-alive exclude="detail">  
      <router-view></router-view>
    </keep-alive>
    <tabbar />
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'

export default {
  name: 'app',
  components: {
    Tabbar
  }
}
</script>

<style>
/* 导入重置浏览器默认样式 */
  @import url(~assets/css/base.css);
</style>
