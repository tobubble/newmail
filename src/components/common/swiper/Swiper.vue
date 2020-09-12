<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="swiperImg.length>0">
      <swiper-slide v-for="(item, index) in swiperImg" :key="index">
        <a v-if="isLinkShow" :href="item.link">
          <img :src="item.image || item" alt />
        </a>
        <img v-else :src="item.image || item" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-show="isPaginationShow"></div>
    </swiper>
  </div>
</template>

<script>
// 导入 vue awesome swiper 的样式和组件
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    swiperImg: {
      type: Array,
    },
    isPaginationShow: {
      type: Boolean,
      default: true
    },
    isLinkShow: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      swiperOption: {
        initialSlide: 0,
        speed: 300,
        autoplay: {
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang='less'>
.swiper-container {
  .swiper-slide {
    img {
      width: 100%;
    }
  }
}

.swiper-pagination-bullet-active {
  background: rgba(255, 255, 255, 0.9);
}
</style>