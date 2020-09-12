<template>
  <div class="shopDesc" v-if="Object.keys(shopInfo).length !== 0">
    <div class="logoWrapper">
      <img :src="shopInfo.logo" alt />
      <span class="shopName">{{shopInfo.name}}</span>
    </div>

    <div class="shopSellMessage">
      <div class="messageLeft">
        <div class="sellAll">
          <div class="quantity">{{shopInfo.sells}}</div>
          <span class="quantity">总销量</span>
        </div>

        <div class="goodsAll">
          <div class="quantity">{{shopInfo.goodsCount}}</div>
          <span class="quantity">全部宝贝</span>
        </div>
      </div>

      <div class="messageMiddle"></div>

      <div class="messageRight">
        <div class="desc" v-for="(item, index) in shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span v-if="item.isBetter" class="fontHighColor">{{item.score}}</span>
          <span v-else class="fontLowColor">{{item.score}}</span>
          <span v-if="item.isBetter" class="backgroundHigh" style="color: #fff">高</span>
          <span v-else class="backgroundLow" style="color: #fff">低</span>
        </div>
      </div>
    </div>

    <div class="goShopWrapper">
      <div class="goShop">近店逛逛</div>
    </div>

    <div class="commitWrapper">
      <div class="dotTop"></div>
      <div class="lineTop"></div>
      <div class="commit">{{shopInfo.desc}}</div>
      <div class="dotBottom"></div>
      <div class="lineBottom"></div>
      <div class="wear">
        穿着效果
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
    },
  },
};
</script>

<style lang='less' scoped>
.shopDesc {
  padding: 0 15px;

  .logoWrapper {
    img {
      width: 45px;
      vertical-align: middle;
    }
    .shopName {
      line-height: 45px;
      margin-left: 10px;
    }
  }

  .shopSellMessage {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .messageLeft {
      display: flex;
      width: 47%;
      justify-content: space-evenly;
      align-items: center;

      div {
        font-size: 18px;
      }
      span {
        font-size: 12px;
      }
    }

    .messageMiddle {
      height: 44px;
      width: 1px;
      background: deeppink;
    }

    .messageRight {
      width: 47%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 20px;

      .desc {
        display: flex;
        span {
          font-size: 13px;
        }

        span:first-child {
          flex: 4;
        }

        span:nth-child(2) {
          flex: 2;
        }

        .fontHighColor {
          color: #f13e3a;
        }
        .fontLowColor {
          color: #5ea732;
        }

        .backgroundHigh {
          background: #f13e3a;
        }

        .backgroundLow {
          background: #5ea732;
        }
      }

      .desc:not(:first-child) {
        margin-top: 8px;
      }
    }
  }

  .goShopWrapper {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    margin-bottom: 2px solid #666;

    .goShop {
      width: 120px;
      line-height: 25px;
      text-align: center;
      background: rgb(242, 245, 248);
    }
  }

  .commitWrapper {
    padding: 20px 0;
    color: #666;

    .dotTop,
    .dotBottom {
      width: 5px;
      height: 5px;
      background: #333;
    }

    .lineTop,
    .lineBottom {
      width: 80px;
      height: 1px;
      background: #333;
    }

    .dotBottom,
    .lineBottom {
      float: right;
    }

    .lineBottom {
      transform: translateY(4px);
    }

    .lineTop {
      transform: translateY(-5px);
    }

    .commit {
      font-size: 14px;
    }

    .wear {
      font-size: 15px;
      margin-top: 15px;
    }
  }
}
</style>