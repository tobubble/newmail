// 里面放入一些混入的代码
export const backTop = {
  data() {
    return {
      isBackShow: false
    }
  },
  mounted() {
    this.$refs.scroll.scroll.on("scroll", (position) => {
      if (-position.y >= 500) {
        this.isBackShow = true;
      } else {
        this.isBackShow = false;
      }
    });
  },
  methods: {
    goBack() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    scroll(position) {
      // console.log(position.y)
      // 判断是否显示 backtop
      if (position.y < -500) {
        this.isBackTopShow = true;
      } else {
        this.isBackTopShow = false;
      }
      // 判断是否显示 category
      if(position.y - 44 < -this.categoryOffsetTop){
        this.categoryShow = true
      }else{
        this.categoryShow = false
      }
    },
  },
} 