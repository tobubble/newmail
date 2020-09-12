<template>
  <div class="good-list-wrapper" v-if="Object.keys(goodList).length != 0">
    <div class="good-list" v-for="(item, index) in goodList.data" :key="item.iid + index">
      <div class="good-img-wrapper" @click="getIid(index)">
          <img v-lazy="item.show.img" @load="imgLoad" alt />
      </div>

      <div class="good-desc-wrapper">
        <div class="good-title">
          {{item.title}}
        </div>
        <div class="good-price-wrapper">
          <div class="good-price">{{item.price | showPirce}}</div>
          <div class="good-cfav">
            <img src="~assets/img/common/collect.svg" alt="">
            {{item.cfav}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodList: {
      type: Object
    },
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    },
    getIid(index) {
      this.$emit('getIid', this.goodList.data[index].iid)
    }
  },
  filters: {
    showPirce(res) {
      return "￥" + res
    }
  }
};
</script>

<style lang='less' scoped>

.good-list-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .good-list {
    width: 44%;
    position: relative;
    padding-bottom: 12%;

    img {
      width: 100%;
    }

    .good-desc-wrapper {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 2%;

      .good-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
      color: #666;
      }

      .good-price-wrapper {
        display: flex;
        line-height: 17px;
        justify-content: space-evenly;

        .good-price{
          color: deeppink;
          font-size: 12px;
        }
        
        .good-cfav {
          color: #666;
          font-size: 12px;
          line-height: 17px;
          img {
            width: 14px;
            vertical-align: middle;
            margin-bottom: 2px;
          }
        }
      }
    }
  }


}

</style>