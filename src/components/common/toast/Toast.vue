<template>
  <div class="toast" v-show="isShow">
    <span class="message">{{message}}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
        isShow: false,
        timer: null
      }
    },
    methods: {
      show(message, delay) {
        console.log('电泳了')
        this.message = message
        this.isShow = true
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
        this.isShow = false          
        }, delay);
      }
    }
  }
</script>

<style lang='less' scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    .message {
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      padding: 5px 5px;
      border-radius: 10px;
    }
  }
</style>