<template>
  <div class="detail">
    <!-- <nav-bar @backClick="backClick" ref="navbar"></nav-bar> -->
    <nav-bar @backClick="backClick" :currentIndex="currentIndex" @itemClick="itemClick"></nav-bar>
    <scroll ref="scroll">
      <swiper
        class="detailSwiper"
        :swiperImg="goodInfo.topImg"
        v-if="Object.keys(goodInfo).length > 0"
      ></swiper>
      <good-desc ref="goodDesc" :goodInfo="goodInfo"></good-desc>
      <shop-desc :shopInfo="shopInfo"></shop-desc>
      <show-img :showImg="showImg"></show-img>
      <good-params ref="goodParams" :GoodsParam="GoodsParam"></good-params>
      <recommend ref="recommend" :recommend="recommend" />
      <recommend-img ref="recommendImg" :goodList="recommendImg" @imgLoad="imgLoad"></recommend-img>
    </scroll>
    <back-top :isBackShow="isBackShow" @click.native="backtop"></back-top>
    <buy-option @addCart="addCart"></buy-option>
  </div>
</template>

<script>
// 引用子组件
import NavBar from "./cpnChildren/NavBar";
import GoodDesc from "./cpnChildren/GoodDesc";
import ShopDesc from "./cpnChildren/ShopDesc";
import ShowImg from "./cpnChildren/ShowImg";
import GoodParams from "./cpnChildren/GoodParams";
import Recommend from "./cpnChildren/Recommend";
import RecommendImg from "./cpnChildren/RecommendImg";
import BuyOption from "./cpnChildren/BuyOption";

// 引用公共组件
import Swiper from "components/common/swiper/Swiper";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backtop/BackTop";

// 引用网络工具

// 引用公共方法
import { debounce } from "common/utils";
import {
  getDetail,
  goodInfo,
  Shop,
  GoodsParam,
  recommend,
} from "network/detail";
import { recommend2 } from "network/recommend";

// import

export default {
  name: "detail",
  components: {
    NavBar,
    Swiper,
    GoodDesc,
    ShopDesc,
    ShowImg,
    GoodParams,
    Recommend,
    RecommendImg,
    Scroll,
    BackTop,
    BuyOption,
  },
  data() {
    return {
      iid: null,
      goodInfo: {}, // 商品信息
      shopInfo: {}, // 商家信息
      showImg: [], // 保存 show 的商品数组
      GoodsParam: {}, // 保存商品的参数信息
      recommend: {}, //保留推荐信息
      recommendImg: [],
      isBackShow: false,
      currentIndex: 0,
      cpnPosition: [],
      GetPosition: null,
      goods: {},
    };
  },
  created() {
    this.iid = this.$route.query.iid;

    getDetail(this.iid).then((res) => {
      // console.log(res)
      const columns = res.result.columns;
      const detailInfo = res.result.detailInfo;
      const itemInfo = res.result.itemInfo;
      const shopInfo = res.result.shopInfo;
      this.goodInfo = new goodInfo(columns, detailInfo, itemInfo, shopInfo);
      // console.log(this.goodInfo)
      this.shopInfo = new Shop(shopInfo, itemInfo);
      this.showImg = res.result.detailInfo.detailImage[0].list;
      this.GoodsParam = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      this.recommend = new recommend(res.result.rate);
    });

    recommend2().then((res) => {
      this.recommendImg = res.data.list;
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      // 获取各个组件的位置信息，并且保存到 data
      this.GetPosition();
    },
    backClick() {
      this.$router.go(-1);
    },
    backtop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    itemClick(index) {
      this.currentIndex = index;
      // 滚动到位置信息
      this.$refs.scroll.scroll.scrollTo(0, -this.cpnPosition[index], 300);
    },
    getPosition() {
      this.cpnPosition = [];
      // 添加位置信息
      this.cpnPosition.push(0);
      this.cpnPosition.push(this.$refs.goodParams.$el.offsetTop);
      this.cpnPosition.push(this.$refs.recommend.$el.offsetTop);
      this.cpnPosition.push(this.$refs.recommendImg.$el.offsetTop);
    },
    addCart() {
      const goods = {};
      goods.image = this.goodInfo.topImg[0]
      goods.title = this.goodInfo.title
      goods.desc = this.goodInfo.desc
      goods.price = this.goodInfo.realPrice
      goods.iid = this.iid
      // this.goods.count = 1
      this.$store.dispatch('addCart', goods).then(res => {
        this.$toast.show(res, 3000)
      })
      // this.$store.state.shopCart[0].count++
      // this.$store.dispatch('addToCart', product)
    },
  },

  mounted() {
    this.$refs.scroll.scroll.on("scroll", (position) => {
      if (-position.y >= 500) {
        this.isBackShow = true;
      } else {
        this.isBackShow = false;
      }
      if (-position.y >= 0 && -position.y <= this.cpnPosition[1]) {
        this.currentIndex = 0;
      } else if (
        -position.y >= this.cpnPosition[1] &&
        -position.y < this.cpnPosition[2]
      ) {
        this.currentIndex = 1;
      } else if (
        -position.y >= this.cpnPosition[2] &&
        -position.y < this.cpnPosition[3]
      ) {
        this.currentIndex = 2;
      } else if (-position.y >= this.cpnPosition[3]) {
        this.currentIndex = 3;
      }
    });

    this.GetPosition = debounce(() => {
      this.getPosition();
    }, 50);
  },
};
</script>

<style lang='less'>
.detailSwiper {
  .swiper-slide {
    height: 400px;
  }
}
</style>