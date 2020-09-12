<template>
  <div id="home">
    <nav-bar>
      <span slot="middle">购物街</span>
    </nav-bar>
    <scroll ref="scroll">
      <swiper :swiperImg="swiperImg" />
      <recommend :recommend="recommend" />
      <recommend-img></recommend-img>
      <good-category ref="goodCategory" @itemClick="itemClick"></good-category>
      <good-list @imgLoad="imgload" :goodList="goodList[currentType]" @getIid="getIid"></good-list>
    </scroll>
    <back-top @click.native="backClick" :isBackShow="isBackShow"></back-top>
    <good-category ref="goodCategory2" @itemClick="itemClick" :isFixed="true" :isShow="isShow"></good-category>
  </div>
</template>

<script>
// 公共组件的导入
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backtop/BackTop";
// 子组件的导入
import Recommend from "./cpnChildren/Recommend";
import RecommendImg from "./cpnChildren/RecommendImg";
import GoodList from "./cpnChildren/GoodList";
import GoodCategory from "./cpnChildren/GoodCatogory";
// 网络工具的导入
import { multiData } from "network/home.js";
import { goodList } from "network/home.js";
// 公共方法（工具）的导入
import { debounce } from "common/utils";

export default {
  components: {
    NavBar,
    Swiper,
    Recommend,
    RecommendImg,
    GoodList,
    GoodCategory,
    Scroll,
    BackTop,
  },
  data() {
    return {
      swiperImg: [], // 保存轮播图的数据
      recommend: [], // 保存推荐的数据
      goodList: {
        pop: { page: 0, data: [] },
        sell: { page: 0, data: [] },
        new: { page: 0, data: [] },
      }, // 保存商品列表的数据  --- 结构： goodList: { pop: {page: 1, data: []}  }
      currentType: "pop",
      refresh: null,
      finishPullUp: null,
      isShow: false,
      isBackShow: false,
    };
  },

  created() {
    // 获得轮播图的信息（数据）
    this.getSwiper();
    this.getGoodList("pop"); // 每次发送请求商品列表的数据，自动请求的 页数 + 1， 因此这里不要传递 page
    this.getGoodList("sell"); // 每次发送请求商品列表的数据，自动请求的 页数 + 1， 因此这里不要传递 page
    this.getGoodList("new"); // 每次发送请求商品列表的数据，自动请求的 页数 + 1， 因此这里不要传递 page
  },
  mounted() {
    this.refresh = debounce(() => {
      this.$refs.scroll.scroll.refresh();
    }, 50);

    this.finishPullUp = debounce(() => {
      this.$refs.scroll.scroll.finishPullUp();
    }, 200);

    this.$refs.scroll.scroll.on("pullingUp", () => {
      this.getGoodList(this.currentType);
      // console.log('上拉加载更多')
      // 当数据在家完毕之后调用 finishPullUp 事件
    });

    this.$refs.scroll.scroll.on("scroll", (position) => {
      // 如果现在的高度要大于 catogory 的高度那么宁外一个catogory将会显示
      if (-position.y >= this.$refs.goodCategory.$el.offsetTop) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }

      if (-position.y >= 500) {
        this.isBackShow = true;
      } else {
        this.isBackShow = false;
      }
    });
  },
  methods: {
    // 获取轮播图信息
    getSwiper() {
      // 获取了 multidata 数据， then 之后处理接收的数据，将轮播图的数据保存到 swiperImg 数组里面，便于利用
      multiData().then((res) => {
        // 保存轮播图信息
        res.data.banner.list.forEach((item) => {
          this.swiperImg.push(item);
        });
        // 保存推荐的信息
        res.data.recommend.list.forEach((item) => {
          this.recommend.push(item);
        });
        console.log(this.recommend);
      });
    },
    getGoodList(type) {
      goodList(type, this.goodList[type].page + 1).then((res) => {
        this.goodList[type].page++;
        res.data.list.forEach((item) => {
          this.goodList[type].data.push(item);
        });
        this.finishPullUp();
      });
    },
    itemClick(index) {
      if (index === 0) {
        this.currentType = "pop";
      } else if (index === 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }

      this.$refs.goodCategory.currentIndex = index;
      this.$refs.goodCategory2.currentIndex = index;
    },
    imgload() {
      // 使用节流函数来刷新
      this.refresh();
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    getIid(iid) {
      this.$router.push({
        path: '/detail/',
        query: {
          iid
        }
      })
    }
  },
};
</script>

<style lang='less'>
</style>